package de.marhali.bff.gateway.presentation.rest;

import lombok.Data;

import java.util.List;

@Data
public class PingDto {
	private String userId;
	private String username;
	private List<String> roles;
}
