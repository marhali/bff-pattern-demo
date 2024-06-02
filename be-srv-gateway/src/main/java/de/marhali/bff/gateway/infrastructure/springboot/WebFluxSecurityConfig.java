package de.marhali.bff.gateway.infrastructure.springboot;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.authentication.RedirectServerAuthenticationSuccessHandler;
import org.springframework.security.web.server.csrf.CookieServerCsrfTokenRepository;
import org.springframework.security.web.server.csrf.CsrfToken;
import org.springframework.web.server.WebFilter;
import reactor.core.publisher.Mono;

@Configuration
@EnableWebFluxSecurity
public class WebFluxSecurityConfig {
	@Bean
	public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
		var cookieTokenRepository = CookieServerCsrfTokenRepository.withHttpOnlyFalse();
		cookieTokenRepository.setCookiePath("/");

		return http
			.csrf(csrf -> csrf
				.csrfTokenRepository(cookieTokenRepository)
				.csrfTokenRequestHandler(new ServerCsrfTokenHeaderRequestHandler()))
			.authorizeExchange(authorize -> authorize.anyExchange().authenticated())
			.oauth2Login(oauth2 -> oauth2.authenticationSuccessHandler(new RedirectServerAuthenticationSuccessHandler("/..")))
			.build();
	}

	@Bean
	public WebFilter csrfCookieWebFilter() {
		return (exchange, chain) -> {
			exchange.getAttributeOrDefault(CsrfToken.class.getName(), Mono.empty()).subscribe();
			return chain.filter(exchange);
		};
	}
}
