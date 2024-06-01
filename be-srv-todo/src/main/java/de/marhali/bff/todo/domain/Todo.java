package de.marhali.bff.todo.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
public class Todo {
	private UUID id;
	private String title;
	private boolean completed;
}
