package de.marhali.bff.todo.domain;

import lombok.Data;

import java.util.UUID;

@Data
public class Todo {
	private final UUID id;
	private final String title;
	private boolean completed;
}
