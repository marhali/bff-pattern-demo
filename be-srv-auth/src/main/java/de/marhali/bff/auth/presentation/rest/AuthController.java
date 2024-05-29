package de.marhali.bff.auth.presentation.rest;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
	@GetMapping("whoami")
	public String whoami(@AuthenticationPrincipal Object principal) {
		return "whoami: " + principal;
	}
}
