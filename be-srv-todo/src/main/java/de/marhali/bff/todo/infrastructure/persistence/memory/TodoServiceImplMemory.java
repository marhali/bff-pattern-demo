package de.marhali.bff.todo.infrastructure.persistence.memory;

import de.marhali.bff.todo.domain.Todo;
import de.marhali.bff.todo.domain.TodoService;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TodoServiceImplMemory implements TodoService {

	private final Map<String, Set<Todo>> todos = new HashMap<>();

	@Override
	public Set<Todo> getTodos(String userId) {
		return todos.getOrDefault(userId, new HashSet<>());
	}

	@Override
	public Optional<Todo> getTodoById(String userId, UUID todoId) {
		var userTodos = this.getTodos(userId);
		return userTodos.stream().filter(userTodo -> userTodo.getId().equals(todoId)).findFirst();
	}

	@Override
	public void addTodo(String userId, Todo todo) {
		var userTodos = this.getTodos(userId);
		userTodos.add(todo);
		todos.put(userId, userTodos);
	}

	@Override
	public void removeTodoById(String userId, UUID todoId) {
		var userTodos = this.getTodos(userId);
		userTodos.removeIf(todo -> todo.getId().equals(todoId));
		todos.put(userId, userTodos);
	}

	@Override
	public void updateTodo(String userId, Todo todo) {
		var targetTodo = this.getTodoById(userId, todo.getId());
		if(targetTodo.isPresent()) {
			targetTodo.get().setTitle(todo.getTitle());
			targetTodo.get().setCompleted(todo.isCompleted());
		} else {
			this.addTodo(userId, todo);
		}
	}
}
