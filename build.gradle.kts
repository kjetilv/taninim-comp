tasks.register("uplift") {
    dependsOn(
        incl("taninim", ":ascension:uplift")
    )
}

tasks.register("ping") {
    dependsOn(
        incl("taninim", ":ascension:uplift-ping")
    )
}

tasks.register("taninim") {
    dependsOn(
        incl("uplift", ":build"),
        incl("taninim", ":build")
    )
}

fun incl(composite: String, task: String): TaskReference =
    gradle.includedBuild(composite).task(task)
