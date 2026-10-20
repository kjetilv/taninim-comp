# Running jenesis's native-image step in a Linux container (version 2)

Checked against jenesis `90e38161` (merge of pull request #249).

## Requirement

Uplift deploys AWS Lambda functions as GraalVM native images. Lambda runs Linux, so the binary must be a
Linux binary. Developers build on macOS.

The Maven build does this with `uplift-maven-plugin` (`NativeLambdaMojo`, `uplift-plugin-core/NativeImage`):

1. Download a Linux GraalVM tarball.
2. Render a Dockerfile that installs gcc, zlib and the libc headers.
3. Run `native-image` in that container with a class path that the plugin builds itself.
4. Zip the binary as the single entry `bootstrap`.

The jenesis build must produce the same zip. It should use jenesis's own `native-image` step, not a second
copy of the class path and command line logic.

## What jenesis does today

### The native-image step

`step/NativeImage.java` already does most of what uplift needs:

- It places artifacts and runtime dependencies on the module path or class path (`ModuleGraph`).
- It reads the main class or modul9e from `launcher.properties`.
- It reads the reachability metadata that the `reachability` step collects, including what the
  native-image agent recorded during tests (`project/NativeImageMetadata.java`).
- It copies legal notices from dependency jars, and the GraalVM `release` file and licences.
- An SBOM step (`native-sbom`) follows it.
- Its output is cached and only rebuilt when its inputs change.

The step only runs the host's `native-image`. `ProcessHandler.OfProcess.ofCommand("native-image")`
(`step/ProcessHandler.java:323`) calls `locate` (line 349). `locate` looks in `GRAALVM_HOME`, then
`java.home`, then `PATH`. On macOS the result is a Darwin binary, or no binary. No setting replaces the
program.

### Container support

- `jenesis.project.docker` runs the whole build in a container (`Project.java:4727-4820`).
- `jenesis.execute.docker` runs a launched program in a container (`Execution.java`, around line 255).
- Both use `docker/DockerizedJava.java`. It mounts the working directory at the same absolute path,
  runs as the host user (`--user uid:gid`), and adds extra mounts and environment variables.
- `DockerizedJava.command` always runs `<java home mount>/bin/java`. The java home is the host's
  `java.home`, mounted read-only. On macOS that is a Darwin JDK, which cannot run in a Linux container.
  `DockerizedJava` has a `home(Path)` wither, but no setting reaches it.
- No `--platform` is passed. The container uses the Docker daemon's own architecture.

### Process handling

- `ProcessHandler` is a sealed interface: `permits ProcessHandler.OfTool, ProcessHandler.OfProcess`
  (`step/ProcessHandler.java:8`). A new kind of handler cannot be added outside that file. A container
  handler must be an `OfProcess`, or `ProcessHandler` must be changed to permit a third type.
- `OfProcess` starts with a filtered environment: `PATH`, `HOME`, `LANG`, `TMPDIR`, `LC_*` and the
  Windows equivalents only (lines 196-218). `DOCKER_HOST`, `DOCKER_CONTEXT` and `DOCKER_CONFIG` are not
  in that list.
- `EnvironmentalProcessBuildStep.environment` adds the variables from `environment-native-image.properties`
  and the step's `inherits` list (`INCLUDE`, `LIB`, `CPATH`, `SDKROOT`, and others) to the process
  environment.
- `ProcessBuildStep.execute` (line 183-186) hands an `OfProcess` marked `shared` to a shared warm JVM
  through `process.scoped(terms.shared())`. A plain `ofCommand` process is not shared and still forks.
  This is the new behaviour of `jenesis.process.shared`, default `true`.

### Plugins

- A `+package` plugin is wired at `project/InferredMultiProjectAssembler.java:635`. It receives
  `handed`: the same `inputs` as the stock native step, plus `images` (line 628).
- `PluginModule.accept` passes all inherited folders on to the plugin.
- The plugin does not receive the `reachability` step, which is added next to the stock step only
  (line 612).
- The package phase inherits the test-phase folders only when `packaging.nativeImage()` is true
  (line 654). A plugin that replaces the stock step needs `native` off, so it loses the reachability
  metadata recorded during tests.
- `NativeImage.handler()` copies the GraalVM `release` file and licences only when the program's file
  name starts with `native-image`. A plugin that wraps the command in `docker` loses this data, and the
  SBOM loses the GraalVM version.

So a plugin can only add a weaker copy of the stock step. The changes below are in jenesis.

## Gap

| Need                                                     | Jenesis today                                                  |
|----------------------------------------------------------|----------------------------------------------------------------|
| Run `native-image` inside a Linux container              | Host program only, found by `locate`                           |
| Use a Linux GraalVM, or the image's own GraalVM          | `DockerizedJava` mounts the host `java.home`; no setting for `home` |
| Run any program in a container, not only `java`          | `DockerizedJava.command` hard-codes `bin/java`                 |
| Choose the target architecture                           | No `--platform`                                                |
| Reach the Docker daemon from a forked step process       | `OfProcess` drops `DOCKER_*` variables                         |
| Pass the step's variables into the container             | Variables are set on the forked process only                   |
| Mount caches and repositories for linked files           | Mount rules exist twice, in `Project` and `Execution`, not reusable by a step |
| Separate cache entries for host and container builds     | Step key has no container fields                               |
| GraalVM licence and version from a container             | Read from the host program's folder only                       |
| Lambda zip with entry `bootstrap`                        | Not in jenesis; belongs in the uplift plugin                   |

## Proposed changes

### 1. `DockerizedJava`: run any program, choose the platform

File: `docker/DockerizedJava.java`

- Add `program(String)`, a wither naming what runs inside the container. A relative value is resolved
  in the mounted java home (`bin/native-image`). A bare name is looked up on the image's `PATH`
  (`native-image`). The default stays `bin/java`.
- Add `platform(String)`, a wither that adds `--platform <value>` to `docker run`, for example
  `linux/amd64`.
- Allow `home(null)` when the image provides the JDK. No java home is mounted then, and `program` must
  be a bare name.
- Keep the same-path working directory mount, `--user`, the hardening flags, the mounts and the
  environment variables.

Why it is useful:

- One class serves `project.docker`, `execute.docker` and the native step.
- `platform` also helps `project.docker` and `execute.docker`. On Apple Silicon they cannot target
  x86_64 today.
- `project.docker` and `execute.docker` gain a way to use a Linux JDK or the image's own JDK. Today both
  fail on macOS and Windows hosts, because the host JDK is mounted into Linux. This needs two more
  settings, `jenesis.project.home` and `jenesis.execute.home`, or one shared setting. They belong in
  `Make.CONTAINED` and `Make.EXECUTED`.

### 2. Reusable mount rules

Files: `Project.java:4727-4820`, `Execution.java` (around line 255-272)

Both build a `DockerizedJava` with nearly the same mounts: target, artifacts and reproduce folders outside
the root, configuration and BOM folders, the caches, the local Maven, OpenPGP and Jenesis repositories,
and the `readable`, `writable` and `env` settings. Move these rules into one method, for example a static
`DockerizedJava.ofProject(...)` or a method on `Project`, and call it from all three places.

Why it is useful:

- The native step needs the same mounts. Step folders can hold links into `~/.m2` or the `.jenesis`
  cache. A link to a folder that is not mounted is broken inside the container.
- The mount rules decide what an untrusted build can read and write. One copy is easier to review.

### 3. A container factory that returns `OfProcess`

File: `step/ProcessHandler.java`

Add `OfProcess.ofContainer(DockerizedJava docker, String program)`, returning
`Function<List<String>, OfProcess>`. It builds the `docker run ... <image> <program> <arguments>` line
from `docker.program(program).command(arguments)`.

Because `ProcessHandler` is sealed, returning an `OfProcess` is the smallest change. It keeps
`ProcessBuildStep`, its `command` supplement file and its "To reproduce, execute:" message unchanged.

Required details:

- **Docker daemon variables.** Put `DOCKER_HOST`, `DOCKER_CONTEXT`, `DOCKER_CONFIG`, `DOCKER_CERT_PATH`
  and `DOCKER_TLS_VERIFY` in the environment of this process when the host has them. Without them, a
  build using Colima, a remote daemon or a non-default context fails in the step, while
  `project.docker` works, because `DockerizedJava` uses `ProcessBuilder` with the full environment.
- **Step variables into the container.** `EnvironmentalProcessBuildStep.environment` sets variables on
  the `docker` process. They must also reach the container. The simplest way: for each variable the
  step adds, put `-e NAME` (no value) in the `docker run` line. Docker then copies the value from its own
  environment. The names are only known in `environment(...)`, after `handler(...)` built the command,
  so `OfProcess` needs a way to add them. Options: a `commands(List<String>)` wither on `OfProcess`, or a
  container flag on `OfProcess` that makes `environment(...)` add the `-e` arguments.
- **Do not forward the platform variables.** `PATH`, `HOME`, `TMPDIR` and `LANG` from the host must not
  become `-e` arguments. A host `PATH` breaks the container.
- **Not shared, not daemon, not aot.** The process must stay a plain fork. With `main`, `daemon`,
  `scoped` and `shared` false, `OfProcess.execute` forks it and `ProcessBuildStep.execute` leaves it
  alone. A test should hold this, as `jenesis.process.shared` is new and defaults to `true`.

Why it is useful: any `EnvironmentalProcessBuildStep` can then run in a container. Later candidates are
`jpackage` building deb or rpm packages from macOS, and tests that must run on Linux.

### 4. Settings for the native step

Files: `step/NativeImage.java`, `project/InferredMultiProjectAssembler.java:613`, `Make.java:800`, the
catalogue in `Project.java`, the reference table in the user documentation.

| Setting                   | Default | Meaning                                                                         |
|---------------------------|---------|---------------------------------------------------------------------------------|
| `jenesis.native.docker`   | `false` | Run `native-image` in a container                                               |
| `jenesis.native.image`    | (none)  | Image holding gcc, zlib and libc headers, and optionally GraalVM                |
| `jenesis.native.home`     | (none)  | Host folder holding a Linux GraalVM, mounted as the java home in the container  |
| `jenesis.native.platform` | (none)  | `--platform` for `docker run`, for example `linux/arm64`                        |

The catalogue has no `native.*` group today (only `observe.native` and `dependency.native`), so the
names are free.

Rules:

- With `native.docker=true`, `native.image` is required. Without it the build fails with an
  `IllegalStateException` naming the setting. There is no default image, because jenesis installs
  nothing itself and must not choose a third-party image.
- With `native.home`, the program is `bin/native-image` in the mounted home. Without it, the program is
  `native-image` on the image's `PATH`, as in `ghcr.io/graalvm/native-image-community`.
- `NativeImage.ofEnvironment` reads the settings and uses `ofContainer(...)` instead of
  `ofCommand("native-image")`. The assembler line does not change.
- The image, home and platform are non-transient fields of the step. The step's serialized form is its
  cache key, so a host build and a container build never share a cache entry. This matters most with a
  shared HTTP build cache.
- The four keys name a program and a container boundary. Add them to a new list beside `Make.CONTAINED`
  and `Make.EXECUTED`, refused in project files at `Make.java:800`. Only the command line and
  `~/.jenesis/jenesis.properties` may set them.
- They do not replace the build process, so `JenesisTool` does not need to refuse them.

Why it is useful:

- The stock `native` packaging stays on. The module keeps `reachability`, the test-phase folders, legal
  notices, the SBOM and caching.
- One project builds a host binary for local tests and a Linux binary for deployment, switched by one
  setting on the command line or in a profile.

### 5. GraalVM licence and version from a container

File: `step/NativeImage.java`, `handler()`

`handler()` walks from the host program to the GraalVM home and copies `release` and the licence files.
With a container:

- With `native.home`: use that host folder directly. The current code can read it.
- Without `native.home`: the GraalVM is inside the image. Two choices:
  - Read `release` and the licence files with `docker create` and `docker cp`, once per image digest.
  - Require `native.home` when an SBOM is produced, and fail with a message naming it otherwise.

The first is better for users; the second is simpler. Inconclusive which the jenesis maintainers prefer.

Why it is useful: the SBOM and the notices beside the image stay correct, and `jenesis.graalvm.license`
keeps its meaning.

### 6. Tests and a demo

AGENTS.md requires these.

- A test that builds `NativeImage` with `native.docker=true` and checks the `docker run` line:
  same-path mounts, `--user`, `--platform`, `-e` names for the step's variables, and no `-e PATH`. The
  factory returns an `OfProcess`, so the test reads `commands()` without a Docker daemon.
- A test that the container `OfProcess` is not handed to the shared JVM under `jenesis.process.shared`.
- A test that the `DOCKER_*` variables reach the forked process.
- A test that `Make.settings` refuses each `jenesis.native.*` key in a project file.
- A test that the step's cache key differs between host and container settings.
- A demo under `demo/`, for example `demo/native-docker`, with a README and a verification command in
  `.github/workflows/demos.yml`. It runs on the Linux runner only, as it needs a Docker daemon.

## Uplift after the change

`uplift-jenesis-plugin` (`UpliftFactory`, today an empty stub) becomes a `+package` plugin with one step:

- Input: the `native` folder (or `native-image` when no SBOM is built). It reaches the plugin through
  `images` in `handed` (`InferredMultiProjectAssembler.java:628`).
- Output: `packages/<identifier>.zip` holding the binary as the entry `bootstrap`. The `Packaged` step
  merges it into `stage/packages/`.

The jenesis build does not need the GraalVM download, the Dockerfile templates or the class path code in
`uplift-plugin-core`. The Maven plugin keeps them.

Example:

    java -Djenesis.native.docker=true \
         -Djenesis.native.image=ghcr.io/graalvm/native-image-community:25 \
         -Djenesis.native.platform=linux/arm64 \
         build/jenesis/Make.java

## Open points

- **Windows hosts.** Same-path mounts work on macOS and Linux. `C:\...` paths are not valid in a Linux
  container. Either the factory rewrites paths, or the feature is refused on Windows hosts with a
  message naming WSL. Not checked further.
- **Docker Desktop file sharing.** On macOS the project and `~/.m2` must be in Docker Desktop's shared
  folders. `/Users` is shared by default.
- **Speed.** Bind mounts on macOS are slower than local disk. `native-image` reads its class path once,
  so the cost should be small next to compile time. Not measured.
- **Scope.** A generic `jenesis.<tool>.docker` setting for every `EnvironmentalProcessBuildStep` is more
  general, but adds more settings to catalogue and refuse. Start with native-image, and generalize when a
  second tool needs it.
