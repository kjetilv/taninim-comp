# Gradle to Maven migration plan

Scope: the Gradle composite build `taninim-comp`, with git submodules `uplift` and
`taninim`, plus the standalone example build `uplift/examples/hello-web`.
Out of scope: `rugen3`, the shadow-cljs frontend. It is not part of the Gradle build.

## 0. Status

Phase 0 is done and verified. The Maven work (sections 1 onward) has not started.

| Step | State |
| --- | --- |
| 0a Capture baseline | done, `~/taninim-maven-baseline/kotlin-gradle` |
| 0b Delete dead code | done, `LambdaTask.kt`, `buildSrc/`, two dead imports |
| 0c Port plugin to Java on Gradle | done, verified |

Verification result: `compare-baseline.sh verify` reports all nine deterministic artifacts
identical, including both rendered Dockerfiles with their full ordered classpaths, the
generated CDK pom, `CloudApp.java`, and the 10KB CloudFormation template. The port is
1022 lines of core across 10 classes plus 714 lines of Gradle adapters across 13 classes,
replacing 1106 lines of Kotlin. No Kotlin remains in either repository.

Found while executing, each recorded in the relevant section below:

1. `LambdaLooper.run()` could not terminate. A refactor in commit `0891ecc3` dropped
   `.takeWhile(Optional::isPresent)` from an infinite `Stream.generate`, so an exhausted or
   closed source spun at 100% CPU forever. It hung `:uplift-lambda:test` indefinitely and
   also broke the production shutdown path, since `HttpInvocationSource.next()` returns
   empty only when closed. Fixed by restoring the `takeWhile`, which was a precondition for
   any of this work: the build could not complete without it.
2. Native binaries and zips are not byte-reproducible, so they cannot be the comparison
   currency. See section 8.
3. The CDK template's key order is not stable either. `LambdaStacker` builds lambda
   environments with `Map.of`, whose iteration order is randomised per JVM. Confirmed by
   running one synth three times and seeing the order change. `compare-baseline.sh`
   normalises it.
4. The Kotlin `UriType.ifType` always returned the URI regardless of type, because
   `takeIf {}.let { uri }` discards the receiver. Both `distfile` and `disturi` were
   therefore always set, making the template's local-file branch dead code. The Java port
   implements the intended behaviour. No effect on current output, since `javaDist` is a
   hardcoded https URL.
5. The plugin has no synth-only task, so a template baseline needs `uplift-init`, a manual
   copy of the zips into the staging directory, then `cdk synth` in the container. Worth
   adding as a goal during the Maven work, since it is the only way to check the CDK path
   without touching AWS.

Still open, both pre-existing and unrelated to the plugin:

* `:lambda-test:test` fails with a direct buffer `OutOfMemoryError`, deterministically and
  at the same byte counts on repeat runs. `Segments.DEFAULT_BASE_POOL_SIZE` is `1 << 24`,
  exactly the 16MB allocation that fails, against the 512MB default direct memory limit.
  About 31 such pools accumulate. The tests that do run pass; the executor JVM dies.
  Not triggered by the port, which `lambda-test` does not use. It may have become reachable
  only once finding 1 was fixed, since these tests could not previously run to completion.

## 1. Current build, summarized

Three Gradle builds:

* `taninim-comp` (root, `settings.gradle.kts`): `includeBuild("uplift")`, `includeBuild("taninim")`.
  Root tasks `uplift`, `ping`, `taninim` delegate into the included builds.
* `uplift`: 20 modules, group `com.github.kjetilv.uplift`, version `0.1.1-SNAPSHOT`.
  Publishes a subset to GitHub Packages. Contains `uplift-gradle-plugins`.
* `taninim`: 8 modules, group `com.github.kjetilv.taninim`, version `0.1.1-SNAPSHOT`.
  Consumes uplift as published artifacts, and consumes the Gradle plugins.

Shared configuration in both root builds: Java 25 toolchain, `--enable-preview` and
`--add-modules jdk.incubator.vector` for compile and test, JUnit 6.0.3 BOM, AssertJ 3.27.7,
sources jar, GitHub Packages repository with credentials.

Non-trivial parts:

1. `uplift-gradle-plugins`: two Gradle plugins written in Kotlin.
   * `com.github.kjetilv.uplift.plugins.lambda` registers task `native-lambda`.
     It renders an ST4 Dockerfile template, runs `docker build` and `docker run`
     to produce a GraalVM native image, then zips it.
   * `com.github.kjetilv.uplift.plugins.uplift` registers tasks `uplift-init`,
     `uplift-bootstrap`, `uplift`, `uplift-ping`, `uplift-destroy`.
     These build a `cdk-site` Docker image, run `cdk init`, generate a CDK app pom,
     inject the project's compile dependencies into that pom, and run
     `cdk bootstrap` / `cdk deploy` / `cdk destroy` inside the container.
     `uplift-ping` reads CloudFormation and Lambda through the AWS SDK.
2. JSON code generation: `uplift-json-gen` is a standard annotation processor,
   registered through `META-INF/services/javax.annotation.processing.Processor`.
   Used through `annotationProcessor` in `fb`, `yellin`, `uplift-lambda`,
   `uplift-json-jmh`, `uplift-json-samplegen`.
3. JMH modules `uplift-json-jmh` and `uplift-synchttp-jmh`, with a custom fat `jmhJar` task
   and a `JavaExec` runner.
4. `taninim/lambda-test` uses the GraalVM `org.graalvm.buildtools.native` plugin.

There are no `module-info.java` files. JPMS is not in use. That removes one class of problems.

## 2. Target structure

```
taninim-comp/pom.xml          aggregator only, packaging pom, modules: uplift, taninim
uplift/pom.xml                parent + aggregator for the uplift modules
uplift/uplift-maven-plugin/   converted from uplift-gradle-plugins
uplift/uplift-*/pom.xml       one per module
taninim/pom.xml               parent + aggregator for the taninim modules
taninim/*/pom.xml             one per module
```

The root pom must not be a parent of the submodule poms. `uplift` and `taninim` are
standalone repositories and must build on their own. Each keeps its own self-contained
parent pom that carries what its `subprojects {}` block carries today.

Inter-module library dependencies need no special handling. Maven's reactor resolves
`com.github.kjetilv.uplift:*:0.1.1-SNAPSHOT` from the reactor when the aggregator build
runs, and from the local repository or GitHub Packages otherwise. The composite build
behaviour for libraries falls out of normal Maven resolution.

## 2.1 Phase 0: delete dead code first

Two pieces of the current build are dead and should go before anyone translates anything.
Verified by grep across both repositories.

* `uplift-gradle-plugins/src/main/kotlin/.../LambdaTask.kt`, 43 lines. No plugin registers
  it and nothing references it. The only occurrence of the name is its own declaration.
  Its function is already covered by `UpliftLambdaZipTask` and `Zip.kt`.
* `uplift/buildSrc/`, containing `Native.kt`, about 70 lines. The only references are two
  commented-out imports at the top of `uplift-flambda/build.gradle.kts`. `buildSrc` is a
  Gradle concept with no Maven equivalent, so it disappears in any case.

That is about 110 lines removed at no cost, and one fewer thing to port.

Also check `uplift-flambda`'s `copy-libs` task while there. It copies `compileOnly` into
`build/libs` and may be left over from the same dead native-image experiment.

## 3. The one structural break: plugin bootstrap

This is the part that has no equivalent and needs a decision.

Gradle's `includeBuild` lets `taninim` use `uplift-gradle-plugins` built from source in the
same invocation. Maven cannot do this. A build plugin must exist in a repository before the
reactor that uses it starts. Maven resolves plugins during model building, before any module
is compiled.

Consequence: the build becomes two phases.

```
mvn -f uplift/pom.xml install       # phase 1: libraries and the maven plugin
mvn -f taninim/pom.xml install      # phase 2: uses the plugin from the local repo
```

The root `taninim-comp/pom.xml` aggregator can still list both modules for the common case
where the plugin version has not changed. When the plugin itself changes, phase 1 must be run
first, alone. Options, in order of preference:

1. Accept the two-phase build. Document it. Provide a small script or Makefile at the root
   that runs both phases. Simple and predictable.
2. Move `uplift-maven-plugin` into its own repository, released independently. Cleanest
   long term, largest change to the repository layout.
3. Keep the plugin in `uplift` but require an explicit `mvn -pl uplift-maven-plugin install`
   step when it changes. This is option 1 with a narrower first phase.

Recommendation: option 1, with a `build.sh` at the root replacing the root Gradle tasks
`uplift`, `ping` and `taninim`.

## 4. Plugin conversion

`uplift-gradle-plugins` becomes `uplift-maven-plugin`, packaging `maven-plugin`.
### 4.1 Language: port to Java, before the Maven conversion, not during it

`uplift-gradle-plugins` is the only Kotlin in either repository. Everything else in uplift
and taninim is Java. Making the plugin Java too removes a whole toolchain from the build
rather than just changing a file dialect.

Keeping Kotlin under Maven has a specific friction that lands on the worst possible place.
`maven-plugin-plugin` extracts the goal descriptor from compiled bytecode, so
`kotlin-maven-plugin` must be ordered before the descriptor step. More importantly, Maven
injects `@Parameter` values by field access, which fights Kotlin non-null types: every mojo
parameter becomes `lateinit var` or nullable-with-`!!`. The plugin also gains
`kotlin-stdlib` as a runtime dependency. All of this sits on the property layer, which is
being rewritten anyway, so keeping Kotlin preserves less than it appears to.

How much Kotlin actually survives a Maven port, of 1106 lines:

| Category | Lines | Language choice matters? |
| --- | --- | --- |
| Dead code (`LambdaTask.kt`) | 43 | no, delete |
| Plugin and task registration (`NativeLambdaPlugin.kt`, `UpliftPlugin.kt`) | 130 | no, vanishes; Maven has no equivalent |
| Gradle-bound helpers (`Greadol.kt`, `Project.kt`, `DefaultTasks.kt`) | 115 | no, rewritten |
| `Property<T>` declarations across the 8 task classes | ~50 | no, become `@Parameter` fields |
| Portable logic: ST4, zip, file IO, CDK app generation, pom templating, AWS ping | ~420 | yes |

So roughly 340 lines are deleted or rewritten regardless, and about 420 lines are the real
translation work. Of those, the ~200 lines of `UpliftTask.logStack` are console output.
Simplify that rather than translating it faithfully. Java text blocks cover it.

Sequence, and this is the part that matters:

1. Port the plugin to Java **inside the existing Gradle build**, as its own commit.
   `java-gradle-plugin` supports Java plugins.
2. Then convert to Maven.

The port is not fully transparent to consumers. Kotlin named arguments and default
arguments work only against Kotlin declarations, and `kotlin.Pair` varargs need
kotlin-stdlib on the consumer side. Three call sites break:

| File | Current | Becomes |
| --- | --- | --- |
| `taninim/ascension/build.gradle.kts` | `configure(stack = "taninim")` | `stack.set("taninim")` |
| `taninim/ascension/build.gradle.kts` | `env("fbSec" to a, "taninimBucket" to b)` | `env(mapOf("fbSec" to a, "taninimBucket" to b))` |
| `examples/hello-web/hello-web-uplift/build.gradle.kts` | `configure(stack = "hello-web-uplift")` | `stack.set("hello-web-uplift")` |

Drop `configure()` altogether rather than keeping a positional Java version that callers
would have to pad with nulls. The values are already `Property<String>`, so consumers use
the setters directly. `stackWith(...)`, `env(...)`, `main = "kudu"`, `withType<T> { }` and
`this !is UpliftPingTask` all survive a Java declaration unchanged.

The commented-out `configure(account = ..., region = ..., profile = ..., stack = ...)`
block in `hello-web-uplift/build.gradle.kts` is user-facing documentation of the same API.
It must be rewritten to the `Property` setter form in the same change.

Because consumer files have to be touched anyway, the misspelled class name
`NativeLamdbdaTask` can be corrected to `NativeLambdaTask` at the same time. Renaming does
not affect any build output, so it adds no verification risk. It touches
`kudu`, `yellin` and `hello-web-service`.

Reason: the plugin has no tests. `src/main` only. The only verification currency is the
artifacts it produces, namely the kudu zip and the CDK synth template. Splitting the work
gives a three-point chain where each comparison isolates one variable:

| Step | Compare against | Confirms |
| --- | --- | --- |
| Kotlin on Gradle | baseline, captured before starting | reference artifacts |
| Java on Gradle | previous step | the translation is correct |
| Java on Maven | previous step | the build port is correct |

Doing the language port during the Maven conversion confounds both variables under the same
artifact check. If the template comes out different, there is nothing to tell you which
change caused it.

To keep the Java port from being written twice, structure it as pure core plus thin
adapters. Docker exec, ST4 rendering, zip, CDK app generation, pom templating and the AWS
ping logic go in plain classes that reference no Gradle types. The Gradle tasks become thin
wrappers over them. The Maven step then discards only the wrappers and writes only mojos.
That is the difference between porting twice and porting once with two adapters.

### 4.2 Goals

Task to goal mapping:

Goal prefix `uplift`, set explicitly with `<goalPrefix>` so the goals do not stutter.
See the end of section 5.1.

| Gradle task | Maven goal | Default phase |
| --- | --- | --- |
| `native-lambda` | `uplift:native-lambda` | `package` |
| `uplift-init` | `uplift:init` | none, called explicitly |
| `uplift-bootstrap` | `uplift:bootstrap` | none |
| `uplift` | `uplift:deploy` | none |
| `uplift-ping` | `uplift:ping` | none |
| `uplift-destroy` | `uplift:destroy` | none |

### 4.3 What moves and what is redesigned

Logic that carries over, and becomes the pure core described in 4.1: the ST4 resources and
both Dockerfile templates, `CloudApp.java`, `Templates.kt`, `Zip.kt`, `FileIO.kt`, the AWS
SDK code in `UpliftTask.ping`, and the pom templating in `UpliftCdkTask`.

Parts that need redesign, not translation:

* `Project.classpath` and `NativeLamdbdaTask.runtimeClasspath`
  become `MavenProject.getRuntimeClasspathElements()`.
* `UpliftCdkTask.dependencies()` reads the Gradle `compileClasspath` configuration to
  inject dependency coordinates into the generated CDK pom.
  Becomes `MavenProject.getDependencies()`, with the same AWS CDK exclusion filter.
* `dependencyOutputs()` is the hardest one. Today `ascension` declares
  `dependsOn(":kudu:native-lambda", ":yellin:native-lambda")` and the deploy task reads
  the zip files straight out of those task outputs. Maven has no cross-module task output
  access. Correct mapping:
  1. the `native-lambda` goal attaches the produced zip as a project artifact
     (`MavenProjectHelper.attachArtifact`, type `zip`);
  2. `ascension` declares normal dependencies on `taninim:kudu:0.1.1-SNAPSHOT:zip` and
     `taninim:yellin:0.1.1-SNAPSHOT:zip`;
  3. the deploy goal resolves those through the dependency resolver instead of reading
     task outputs.
  This also removes the `LambdaZipTask.lambdaZips` fallback logic.

  **Rename on copy.** The zip file name is part of the contract with the stack builders.
  `NativeLambdaPlugin` names the zip `${project.name}.zip`, the container mounts the staging
  directory at `/lambdas`, and both stack builders hardcode that path:
  `LambdaStacker.java` uses `/lambdas/yellin.zip` and `/lambdas/kudu.zip`, and
  `HelloWebBuilder.java` uses `/lambdas/hello-web-service.zip`.
  Maven artifact resolution yields `hello-web-service-0.1.1-SNAPSHOT.zip` in the local
  repository, with the version in the name. The deploy goal must therefore copy each
  resolved zip into the staging directory under `${artifactId}.zip`, dropping the version.
  Get this wrong and the failure appears only at CDK synth or deploy time, as a missing
  asset, not at build time.
* `ExecOperations` becomes `ProcessBuilder`, or `maven-invoker`'s exec support.
  A thin `docker(cwd, cmd)` helper keeps the call sites unchanged.
* `project.buildSubDirectory("uplift")` becomes `${project.build.directory}/uplift`.
  `cdkApp()` becomes `${project.build.directory}/cdk-app`.
* The property resolution chain (system property, then environment variable, then project
  property) is mostly covered by `@Parameter(property = "...", defaultValue = "...")`.
  Keep an explicit fallback helper for the environment variable step, which Maven does not
  read by itself.
* Task input and output annotations (`@Input`, `@OutputFile`, `@CacheableTask`) have no
  Maven counterpart. Drop them. Maven has no task-level incremental build. Expect the
  native image build to run on every `package` unless guarded by a simple timestamp check
  or a profile. Add such a guard, because the Docker native-image build is slow.
* `Greadol.kt` operator overloads and `Project.kt` helpers can be deleted or reduced.

## 5. Per-module work

`uplift`, parent pom carries:

* `maven-compiler-plugin`, `release` 25, `compilerArgs`
  `--enable-preview`, `--add-modules`, `jdk.incubator.vector`.
* `maven-surefire-plugin`, `argLine` with the same two options.
* `dependencyManagement` importing `org.junit:junit-bom:6.0.3`, plus AssertJ 3.27.7.
* Default test dependencies: `junit-jupiter`, `junit-jupiter-api`,
  `junit-jupiter-engine`, `junit-platform-launcher`, `assertj-core`.
  Maven has no `subprojects { dependencies { ... } }`, so these go in the parent's
  `<dependencies>` with test scope. That is the correct Maven idiom.
* `maven-source-plugin` for the sources jar.
* `distributionManagement` pointing at GitHub Packages.

Modules and their specifics:

| Module | Notes |
| --- | --- |
| `uplift-util`, `uplift-flogs`, `uplift-json-anno` | no `build.gradle.kts` today, still need minimal poms |
| `uplift-hash`, `uplift-json`, `uplift-kernel`, `uplift-s3`, `uplift-synchttp`, `uplift-edam`, `uplift-edamame`, `uplift-json-mame`, `uplift-json-match`, `uplift-json-gen`, `uplift-fq` | plain library poms, translate the dependency lists |
| `uplift-lambda` | `annotationProcessorPaths` with `uplift-json-gen` |
| `uplift-flambda` | has a `copy-libs` task; check whether it is still used, drop it if not |
| `uplift-json-samplegen` | `annotationProcessorPaths` with `uplift-json-gen` |
| `uplift-json-jmh` | `annotationProcessorPaths` with `uplift-json-gen` and `jmh-generator-annprocess`; `maven-shade-plugin` with `Main-Class: org.openjdk.jmh.Main` replaces `jmhJar`; `exec-maven-plugin` replaces the `jmh` JavaExec task |
| `uplift-synchttp-jmh` | same JMH treatment, no json-gen processor |
| `uplift-maven-plugin` | packaging `maven-plugin`, `kotlin-maven-plugin`, `maven-plugin-plugin` |

Publishing subset: the Gradle build publishes only
`gradle-plugins, synchttp, edam, edamame, flambda, flogs, hash, json, json-anno, json-gen,
json-mame, kernel, lambda, s3, util, uuid`. Not published: `uplift-fq`, `uplift-json-match`,
`uplift-json-jmh`, `uplift-synchttp-jmh`, `uplift-json-samplegen`. Set
`<maven.deploy.skip>true</maven.deploy.skip>` in those five.

The Gradle publish list also names `uuid`, but there is no `uplift-uuid` module in
`settings.gradle.kts`. That is a stale entry. Ignore it.

Note: `uplift-json` also carries a `META-INF/services/javax.annotation.processing.Processor`
file, alongside the one in `uplift-json-gen`. Check whether that is intentional. If it is
stale it will register a processor that is not on the path and cause warnings.

`taninim`, parent pom carries the same compiler, surefire, junit and sources configuration,
plus a repository entry for GitHub Packages restricted to group
`com.github.kjetilv.uplift`, and `pluginManagement` pinning `uplift-maven-plugin`.

| Module | Notes |
| --- | --- |
| `taninim`, `fb` | library poms; `fb` needs `annotationProcessorPaths` with `uplift-json-gen`, and the restfb exclusions for slf4j and lombok |
| `kudu`, `yellin` | library poms plus the `native-lambda` goal bound to `package`, with `main` set to `kudu` and `yellin`; `yellin` needs the json-gen processor path |
| `kudu-server`, `yellin-server` | plain library poms |
| `lambda-test` | `org.graalvm.buildtools:native-maven-plugin`, direct equivalent of the Gradle plugin, `imageName` and `mainClass` both `localTaninim` |
| `ascension` | `uplift-maven-plugin` goals, CDK dependencies, zip dependencies on `kudu` and `yellin` as described in section 4 |

`ascension/gradle.properties` holds `account`, `region`, `profile`, `fbSec` and
`taninimBucket`. These become plugin parameters. See section 6.

## 5.1 examples/hello-web

`uplift/examples/hello-web` is a separate build with its own Gradle wrapper and its own
`settings.gradle.kts`, group `com.github.kjetilv.uplift.examples`. It is not part of the
uplift composite. That separation is deliberate: the example demonstrates consuming uplift
the way an outside user would, through published artifacts rather than from source. Keep
that property in the Maven version.

Structure: a standalone aggregator plus parent pom, two modules.

| Module | Notes |
| --- | --- |
| `hello-web-service` | the lambda; `native-lambda` goal bound to `package`, `main` set to `helloweb`; test dependency on `uplift-flambda` |
| `hello-web-uplift` | the CDK stack builder; uplift goals, CDK dependencies |

Because it consumes uplift only as resolved artifacts, it is a plain single-reactor Maven
build. The two-phase problem in section 3 does not apply inside it. Its precondition is the
same as taninim's: `uplift-maven-plugin` must already be installed or published.

Specific items:

* `settings.gradle.kts` maps the plugin namespace to the plugin artifact through
  `pluginManagement.resolutionStrategy.eachPlugin`. This has no Maven counterpart and needs
  none. Maven plugins are referenced by coordinates directly. The block simply disappears.
* The cross-module zip dependency is the same shape as `ascension`:
  `dependsOn(":hello-web-service:native-lambda", "jar")`. It gets the same artifact
  attachment treatment, including the rename-on-copy rule in section 4.3.
  This module is the better place to prove that design first. It is much smaller than
  `ascension` and its stack has one function instead of two.
* `admonish()` in `hello-web-uplift/build.gradle.kts` is configuration-time validation that
  prints a long message when `account`, `region` or `profile` are missing. Replace it with
  `maven-enforcer-plugin` and three `requireProperty` rules, each with a `message`. That is
  a genuine improvement: the enforcer fails the build, while `admonish` only logs an error
  and lets the build continue to a confusing failure later.
* `gradle.properties.template.txt` is tracked and is referenced from the README as the thing
  a user copies. Replace it with `maven.config.template.txt`, copied to
  `.mvn/maven.config` as `-Daccount=...`, `-Dregion=...`, `-Dprofile=...`. Keep it as a
  tracked template file, since being copyable is the point.
* Delete the Gradle wrapper. Add a Maven wrapper with `mvn -N wrapper:wrapper` if the
  README's `./gradlew` style invocation should stay, as `./mvnw`.
* `README.md` needs rewriting, not just editing. It documents the Gradle property setup in
  step 3, and step 4.1 tells the reader to run
  `./gradlew build publishToMavenLocal publishPluginMavenPublicationToMavenLocal` in the
  uplift root. That becomes `mvn -f ../../pom.xml install`. Then `./gradlew uplift` becomes
  `mvn uplift:uplift-deploy` and `./gradlew uplift-ping` becomes `mvn uplift:uplift-ping`,
  subject to the goal prefix chosen for the plugin.

Pick a goal prefix deliberately, because the README is where it becomes public. Naming the
plugin `uplift-maven-plugin` gives the default prefix `uplift`, so `mvn uplift:uplift-deploy`
reads with a stutter. Setting `<goalPrefix>uplift</goalPrefix>` and naming the goals
`deploy`, `ping`, `init`, `bootstrap`, `destroy`, `native-lambda` gives `mvn uplift:deploy`
and `mvn uplift:ping`. Prefer that, and update the goal table in section 4.2 to match.

## 6. Credentials

`taninim/gradle.properties` and `uplift/gradle.properties` hold the GitHub personal access
token for the packages repository, as `githubUser` and `githubToken`.

These files are untracked and ignored in all three repositories. Verified: `.gitignore`
covers `gradle.properties` in uplift (line 38), taninim (line 17) and taninim-comp (line 3);
`git log --all -S ghp_` finds no hits in any of the three. The tokens were never committed
and do not need revoking.

Same for `ascension/gradle.properties`, which holds `account`, `region`, `profile`, `fbSec`
and `taninimBucket`. Also untracked and ignored, and the `fbSec` value has never been
committed. The AWS account number does appear in tracked source
(`ascension/src/main/java/taninim/uplift/LambdaStacker.java`) and in history, but an account
id is not a credential.

Migration actions:

1. Move `githubUser` and `githubToken` to `~/.m2/settings.xml` under `<servers>`, with a
   `<server><id>github</id>` entry matching the repository id used in the poms. This is
   where Maven expects repository credentials, and it keeps them out of the project tree
   entirely rather than relying on `.gitignore`.
2. In CI, use `${env.GITHUB_TOKEN}` in a generated `settings.xml`, or the
   `actions/setup-java` server-id support.
3. Keep `account`, `region`, `profile` and `taninimBucket` as build properties. Put them in
   `ascension/.mvn/maven.config` or directly in the pom, since they are not secret.
   Keep `fbSec` outside the tree: either `~/.m2/settings.xml` as a property, or the
   environment variable that `ascension/build.gradle.kts` already reads first.
4. Delete the `gradle.properties` files at the end of the migration, with the Gradle build
   files.

## 7. CI

`.github/workflows/gradle.yml` pins JDK 23 and runs `uplift:build taninim:build`.
Replace with a Maven workflow:

* `actions/setup-java` with `java-version: 25`, `distribution: temurin`,
  `cache: maven`, and `server-id` plus `GITHUB_TOKEN` for the packages repository.
* Step 1: `mvn -B -f uplift/pom.xml install`.
* Step 2: `mvn -B -f taninim/pom.xml install`.
* The native-image and CDK goals stay out of CI. They need Docker and AWS credentials.

## 8. Order of work and verification

Migrate and verify in dependency order. Do not move on until the previous step's tests pass.

Steps 0a to 0c happen while the build is still Gradle. They are prerequisites, not part of
the Maven work, and each is its own commit.

0a. Capture the baseline artifacts from the current Kotlin-on-Gradle build. Keep them
    outside the tree. Everything after this compares against them.
0b. Delete the dead code listed in section 2.1.
0c. Port the plugin to Java, still on Gradle, structured as pure core plus thin task
    wrappers per section 4.1.
    Verify: the baseline from 0a is reproduced. This is the check that the translation is
    correct, and it is the only point at which it can be checked in isolation.

### What can and cannot be compared

The native binary is not the comparison currency. GraalVM `native-image` is not
byte-reproducible here: the build uses `-g`, and `Zip.kt` writes the zip through
`ZipOutputStream`, which embeds a timestamp in the entry. Two runs of the *unmodified*
Gradle build already produce different `kudu.zip` bytes. Any plan step that says "the zips
must match" byte for byte is unachievable and would produce a false alarm.

Compare these instead. All are deterministic given the same inputs:

| Artifact | Path | Why deterministic |
| --- | --- | --- |
| Rendered lambda Dockerfile | `<mod>/build/uplift/Dockerfile` | pure ST4 output; contains the arch, main class, options and the full classpath list |
| Staged classpath | `<mod>/build/uplift/classpath/` listing | jar file names resolved from the dependency graph |
| Zip structure | `unzip -l <mod>/build/uplift/<mod>.zip` | must be exactly one entry named `bootstrap` |
| Generated CDK pom | `ascension/build/cdk-app/pom.xml` | injected dependency coordinates plus the five `uplift.*` system properties |
| Generated CDK app | `ascension/build/cdk-app/src/main/java/lambda/uplift/app/CloudApp.java` | copied resource |
| CDK template | `ascension/build/cdk-app/cdk.out/taninim.template.json` | deterministic after normalising asset hashes |

The rendered Dockerfile is the most valuable of these. It encodes nearly every plugin input
that matters: architecture, main class, `--enable-preview`, `--add-modules`, the GraalVM
distribution URI and the complete ordered classpath. If it is identical, the plugin computed
the same build.

The CDK template contains exactly two 64-hex asset hashes, which are SHA-256 sums of the two
zips, appearing as `S3Key` values and as `asset.<hash>.zip` file names. Normalise those two
before diffing. Everything else in the template, all ten thousand or so bytes of it, must
match exactly.

Use `compare-baseline.sh` at the repository root for this. It normalises and diffs all of the
above in one run.

Then the Maven work:

1. `uplift` parent pom plus the leaf libraries with no dependencies
   (`uplift-util`, `uplift-flogs`, `uplift-json-anno`).
   Verify: `mvn -f uplift install` reaches those modules, tests pass.
2. The rest of the uplift libraries, in dependency order.
   Verify: full `mvn -f uplift/pom.xml install`, compare the test counts against
   `./gradlew :uplift:test` output from before the migration.
3. `uplift-json-gen` used as a processor. Verify the generated sources appear under
   `target/generated-sources/annotations` in `uplift-lambda` and that its tests pass.
   This is the check that the JSON generation survived the move.
4. `uplift-maven-plugin`. Only the mojo layer is new here; the core came over in step 0c.
   Verify goal descriptors are generated, meaning
   `target/classes/META-INF/maven/plugin.xml` lists all six goals.
5. `taninim` parent pom and the library modules.
   Verify: `mvn -f taninim/pom.xml install` with the plugin already installed.
6. `native-lambda` on `kudu`. Locally verifiable: needs Docker but not AWS.
   Verify with `compare-baseline.sh`: the rendered Dockerfile, the staged classpath and the
   zip structure must match the baseline. Not the zip bytes. See the note above.
7. `lambda-test` with `native-maven-plugin`.
8. `examples/hello-web`, per section 5.1. Do this before `ascension`, not after.
   It exercises the same zip attachment and rename-on-copy design in a two-module build
   with a single lambda, so a failure there is easy to localise. It also has an actual test
   (`HelloWebTest`), which nothing in the plugin path otherwise does.
   Verify: `mvn install` in the example, then `mvn uplift:init` plus a synth.
9. The CDK path on `ascension`, as far as `uplift:init` plus a CDK synth, which produces
   `target/cdk-app/cdk.out/taninim.template.json` without touching AWS.
   Verify it matches the step 0c template. Because the language port was already proven in
   0c, a difference here can only come from the Maven port.
10. Rewrite `examples/hello-web/README.md`. It is user-facing documentation of the build
    commands, so it is part of the migration, not an afterthought.
11. Actual `cdk deploy` against account 732946774009 is a manual, deliberate action. This
    plan stops at template comparison.

Keep the Gradle build files in place until step 9 passes, so that any comparison can be
re-run against a live Gradle build rather than only against the stored baseline. Delete the
Gradle files, the `gradle.properties` files and the wrapper in a single final commit.

## 9. Known losses

State these up front so they are not discovered late.

* Task-level incremental builds and the Gradle build cache. Maven has neither.
  The native-image build in particular will re-run unless guarded.
* Configuration-time logic. The `resolveProperty` chains and the conditional
  `if (project.name in listOf(...))` blocks in `uplift/build.gradle.kts` have no direct
  equivalent. They become explicit per-module pom settings, which is more verbose but
  easier to read.
* Single-command build across both repositories when the plugin changes. See section 3.
* Gradle's distinction between `implementation` and `api`. Maven scope `compile` is
  transitive. Every `implementation` dependency becomes visible to consumers. This is a
  behaviour change, not just a syntax change. It will not break the build but it weakens
  encapsulation. `provided` scope is not a substitute. Accept it, or introduce
  `maven-enforcer-plugin` banned-dependency rules where the boundary matters.

## 10. Effort estimate

| Part | Size |
| --- | --- |
| Phase 0: delete dead code, capture baseline | small |
| Port plugin to Java on Gradle, section 4.1 | medium, about 420 lines of real translation |
| Aggregator and two parent poms | small |
| 20 uplift module poms | medium, mostly mechanical |
| 8 taninim module poms | small |
| Mojo layer for `uplift-maven-plugin` | medium, thin if the core is already separated |
| Zip artifact redesign, section 4.3 | medium, needs a design decision |
| `examples/hello-web`, 2 modules plus README rewrite | small |
| CI and credentials | small |
| Verification, section 8 | medium |

The plugin work is the bulk, but splitting it as above turns one large step with two
confounded variables into two medium steps that can each be checked on their own.
