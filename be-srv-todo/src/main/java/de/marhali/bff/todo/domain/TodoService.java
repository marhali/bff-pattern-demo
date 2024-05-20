package de.marhali.bff.todo.domain;

import java.util.Optional;
import java.util.Set;
import java.util.UUID;

public interface TodoService {
	Set<Todo> getTodos(String userId);
	Optional<Todo> getTodoById(String userId, UUID todoId);
	void addTodo(String userId, Todo todo);
	void removeTodoById(String userId, UUID todoId);
	void updateTodo(String userId, Todo todo);
}
