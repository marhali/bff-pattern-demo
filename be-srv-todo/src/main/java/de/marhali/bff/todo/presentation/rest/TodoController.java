package de.marhali.bff.todo.presentation.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {
	@GetMapping
	public String listTodos() {
		return "helloWorld";
	}
}
