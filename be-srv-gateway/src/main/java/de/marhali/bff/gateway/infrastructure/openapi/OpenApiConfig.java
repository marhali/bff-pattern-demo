package de.marhali.bff.gateway.infrastructure.openapi;

import org.springdoc.core.properties.AbstractSwaggerUiConfigProperties.SwaggerUrl;
import org.springdoc.core.properties.SwaggerUiConfigProperties;
import org.springdoc.core.utils.Constants;
import org.springframework.cloud.gateway.route.RouteDefinitionLocator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Configuration
public class OpenApiConfig {
	@Bean
	@Primary
	public SwaggerUiConfigProperties openApiUrlsLocatorViaRouteDefinitions(SwaggerUiConfigProperties properties, RouteDefinitionLocator routeDefinitionLocator) {
		Set<SwaggerUrl> urls = new HashSet<>();

		var servicesSwaggerUrls = routeDefinitionLocator.getRouteDefinitions()
			.filter(routeDefinition -> routeDefinition.getId().matches(".*-service"))
			.map(routeDefinition -> {
				var serviceName = routeDefinition.getId().replace("-service", "");
				return new SwaggerUrl(serviceName, "/" + serviceName + Constants.DEFAULT_API_DOCS_URL, null);
			}).collect(Collectors.toSet()).block();

		urls.add(new SwaggerUrl("gateway", Constants.DEFAULT_API_DOCS_URL, null));
		urls.addAll(Objects.requireNonNull(servicesSwaggerUrls));

		properties.setUrls(urls);
		properties.getCsrf().setEnabled(true);

		return properties;
	}
}
