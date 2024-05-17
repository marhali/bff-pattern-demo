package de.marhali.bff.gateway.infrastructure.openapi;

import lombok.AllArgsConstructor;
import org.springdoc.core.properties.AbstractSwaggerUiConfigProperties;
import org.springdoc.core.properties.SwaggerUiConfigProperties;
import org.springframework.cloud.gateway.route.RouteDefinitionLocator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import java.util.Set;
import java.util.stream.Collectors;

@Configuration
@AllArgsConstructor
public class OpenApiUrlsLocator {

	private final RouteDefinitionLocator routeDefinitionLocator;

	@Bean
	@Primary
	public SwaggerUiConfigProperties openApiUrlsLocatorViaRouteDefinitions(SwaggerUiConfigProperties properties) {
		Set<AbstractSwaggerUiConfigProperties.SwaggerUrl> urls = routeDefinitionLocator.getRouteDefinitions()
			.filter(routeDefinition -> routeDefinition.getId().matches(".*-service"))
			.map(routeDefinition -> {
				var serviceName = routeDefinition.getId().replaceAll("-service", "");
				return new AbstractSwaggerUiConfigProperties.SwaggerUrl(serviceName, "/" + serviceName + "/v3/api-docs", null);
		}).collect(Collectors.toSet()).block();

		properties.setUrls(urls);

		return properties;
	}
}
