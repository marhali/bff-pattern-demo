package de.marhali.bff.gateway.infrastructure.springboot;

import org.springframework.security.web.server.csrf.CsrfToken;
import org.springframework.security.web.server.csrf.ServerCsrfTokenRequestAttributeHandler;
import org.springframework.security.web.server.csrf.XorServerCsrfTokenRequestAttributeHandler;
import org.springframework.util.StringUtils;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

public class ServerCsrfTokenHeaderRequestHandler extends ServerCsrfTokenRequestAttributeHandler {

	private final ServerCsrfTokenRequestAttributeHandler delegate =
		new XorServerCsrfTokenRequestAttributeHandler();

	@Override
	public void handle(ServerWebExchange exchange, Mono<CsrfToken> csrfToken) {
		this.delegate.handle(exchange, csrfToken);
	}

	@Override
	public Mono<String> resolveCsrfTokenValue(ServerWebExchange exchange, CsrfToken csrfToken) {
		if (exchange.getRequest().getHeaders().getOrEmpty(csrfToken.getHeaderName()).stream()
			.anyMatch(StringUtils::hasText)) {
			return super.resolveCsrfTokenValue(exchange, csrfToken);
		}

		return this.delegate.resolveCsrfTokenValue(exchange, csrfToken);
	}
}
