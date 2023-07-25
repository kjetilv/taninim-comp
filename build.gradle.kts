plugins {
    java
}

tasks.register("uplift") {
    dependsOn(
        incl("taninim", ":ascension:uplift")
    )
}

tasks.register("taninim") {
    dependsOn(
        incl("uplift", ":build"),
        incl("taninim", ":build")
    )
}

tasks.register("hello-web") {
    dependsOn(
        incl("uplift/examples/hello-web", ":hello-web")
    )
}

fun incl(composite: String, task: String): TaskReference = gradle.includedBuild(composite).task(task)
