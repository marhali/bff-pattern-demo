package de.marhali.bff.gateway.presentation.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class PingController {
	@GetMapping("ping")
	public Mono<Boolean> ping() {
		return Mono.just(true);
	}
}
