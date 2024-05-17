plugins {
  java
  alias(libs.plugins.spring.boot)
  alias(libs.plugins.spring.dependency.management)
}

group = providers.gradleProperty("projectGroup").get()
version = providers.gradleProperty("projectVersion").get()

java {
  sourceCompatibility = JavaVersion.toVersion(libs.versions.java.get())
}

repositories {
  mavenCentral()
}

dependencies {
  implementation(libs.spring.boot.starter.actuator)
  implementation(libs.spring.cloud.config.client)
  implementation(libs.spring.cloud.discovery.client)
  implementation(libs.spring.cloud.gateway)
  implementation(libs.springdoc.openapi.webflux.api)
  implementation(libs.springdoc.openapi.webflux.ui)
  testImplementation(libs.spring.boot.starter.test)
  testRuntimeOnly(libs.junit.platform.launcher)
}

dependencyManagement {
  imports {
    mavenBom("org.springframework.cloud:spring-cloud-dependencies:${libs.versions.spring.cloud.version.get()}")
  }
}

tasks.withType<Test> {
  useJUnitPlatform()
}
