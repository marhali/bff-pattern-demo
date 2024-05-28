package de.marhali.bff.gateway.infrastructure.springboot;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import lombok.Data;

import org.springframework.boot.autoconfigure.web.reactive.WebFluxProperties;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.cloud.gateway.support.ServerWebExchangeUtils;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Component
public class StripBasePathGatewayFilterFactory extends AbstractGatewayFilterFactory<StripBasePathGatewayFilterFactory.Config> {

	private final String basePath;

	public StripBasePathGatewayFilterFactory(WebFluxProperties webFluxProperties) {
		super(Config.class);
		this.basePath = webFluxProperties.getBasePath();
	}

	@Override
	public GatewayFilter apply(Config config) {
		return (exchange, chain) -> {
			ServerWebExchangeUtils.addOriginalRequestUrl(exchange, exchange.getRequest().getURI());

			String path = exchange.getRequest().getURI().getRawPath();
			String pathWithoutBase = path.replaceFirst(basePath != null ? basePath : "", "");

			String suffixPath = "/" + Arrays.stream(StringUtils.tokenizeToStringArray(pathWithoutBase, "/"))
				.skip(config.getParts())
				.collect(Collectors.joining("/"));

			ServerHttpRequest modifiedRequest = exchange.getRequest().mutate()
				.contextPath(suffixPath)
				.path(suffixPath)
				.build();

			return chain.filter(exchange.mutate().request(modifiedRequest).build());
		};
	}

	@Override
	public List<String> shortcutFieldOrder() {
		return List.of("parts");
	}

	@Data
	public static class Config {
		private int parts;
	}
}
