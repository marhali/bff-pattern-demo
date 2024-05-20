package de.marhali.bff.gateway.infrastructure.openapi;

import org.springdoc.core.properties.AbstractSwaggerUiConfigProperties;
import org.springdoc.core.properties.SwaggerUiConfigProperties;
import org.springdoc.core.utils.Constants;
import org.springframework.cloud.gateway.route.RouteDefinitionLocator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import java.util.Set;
import java.util.stream.Collectors;

@Configuration
public class OpenApiConfig {
	@Bean
	@Primary
	public SwaggerUiConfigProperties openApiUrlsLocatorViaRouteDefinitions(SwaggerUiConfigProperties properties, RouteDefinitionLocator routeDefinitionLocator) {
		Set<AbstractSwaggerUiConfigProperties.SwaggerUrl> urls = routeDefinitionLocator.getRouteDefinitions()
			.filter(routeDefinition -> routeDefinition.getId().matches(".*-service"))
			.map(routeDefinition -> {
				var serviceName = routeDefinition.getId().replaceAll("-service", "");
				return new AbstractSwaggerUiConfigProperties.SwaggerUrl(serviceName, "/" + serviceName + Constants.DEFAULT_API_DOCS_URL, null);
		}).collect(Collectors.toSet()).block();

		properties.setUrls(urls);
		properties.getCsrf().setEnabled(true);

		return properties;
	}
}
