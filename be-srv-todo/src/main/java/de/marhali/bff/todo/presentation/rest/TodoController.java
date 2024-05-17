package de.marhali.bff.todo.presentation.rest;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {
	@GetMapping
	public String listTodos() {
		return "helloWorld";
	}

	@GetMapping("whoami")
	public String whoami(@AuthenticationPrincipal Jwt user) {
		return "whoami: " + user.getSubject() + user.getId() + user.getHeaders();
	}
}
