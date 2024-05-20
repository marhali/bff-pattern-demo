package de.marhali.bff.todo.presentation.rest;

import de.marhali.bff.todo.domain.Todo;
import de.marhali.bff.todo.domain.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.UUID;

@RestController
@AllArgsConstructor
public class TodoController {

	private final TodoService todoService;

	@GetMapping
	public Set<Todo> listMyTodos(Authentication auth) {
		return todoService.getTodos(auth.getName());
	}

	@PostMapping
	public void addTodo(Authentication auth, @RequestBody Todo todo) {
		this.todoService.addTodo(auth.getName(), todo);
	}

	@DeleteMapping("{todoId}")
	public void removeTodo(Authentication auth, @PathVariable UUID todoId) {
		this.todoService.removeTodoById(auth.getName(), todoId);
	}

	@PutMapping
	public void updateTodo(Authentication auth, @RequestBody Todo todo) {
		this.todoService.updateTodo(auth.getName(), todo);
	}

	@GetMapping("whoami")
	public String whoami(@AuthenticationPrincipal Jwt user) {
		return "whoami: " + user.getSubject() + user.getId() + user.getHeaders();
	}

	@GetMapping("auth")
	public String auth(Authentication auth) {
		return "auth: " + auth.getName() + auth.getPrincipal() + auth.getAuthorities();
	}
}
