package de.marhali.bff.gateway.presentation.rest;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.stream.Collectors;

@RestController
public class PingController {
	@GetMapping("ping")
	public Mono<PingDto> ping(@AuthenticationPrincipal DefaultOidcUser user) {
		var dto = new PingDto();

		dto.setUserId(user.getSubject());
		dto.setUsername(user.getName());
		dto.setRoles(user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()));

		return Mono.just(dto);
	}
}
