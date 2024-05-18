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
  implementation(project(":be-shared"))
  implementation(libs.spring.boot.starter.actuator)
  implementation(libs.spring.cloud.config.client)
  implementation(libs.spring.cloud.discovery.client)
  implementation(libs.micrometer.tracing.bridge.otel)
  implementation(libs.opentelemetry.exporter.zipkin)
  implementation(libs.spring.boot.starter.web)
  implementation(libs.spring.boot.starter.security)
  implementation(libs.spring.boot.starter.oauth2.resource.server)
  implementation(libs.springdoc.openapi.webmvc.api)
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
