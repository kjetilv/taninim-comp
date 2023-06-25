delegate("clean")
delegate("build")

fun delegate(name: String) = tasks.register(name) {
    dependsOn(gradle.includedBuilds.map { build ->
        build.task("${build.name}:$name")
    })
}
