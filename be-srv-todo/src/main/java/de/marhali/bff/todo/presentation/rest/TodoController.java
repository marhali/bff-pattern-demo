package de.marhali.bff.todo.presentation.rest;

import de.marhali.bff.todo.domain.Todo;
import de.marhali.bff.todo.domain.TodoService;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Set;
import java.util.UUID;

@RestController
@AllArgsConstructor
public class TodoController {

	private final TodoService todoService;

	@GetMapping
	public Set<Todo> listTodos(Authentication auth) {
		return todoService.getTodos(auth.getName());
	}

	@GetMapping("{todoId}")
	public Todo getTodo(Authentication auth, @PathVariable UUID todoId) {
		return todoService.getTodoById(auth.getName(), todoId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
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
}
