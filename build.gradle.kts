tasks.register("uplift") {
    dependsOn(gradle.includedBuild("taninim").task(":ascension:uplift"))
}

tasks.register("hello-web") {
    dependsOn(gradle.includedBuild("uplift/examples/hello-web").task(":hello-web"))
}
