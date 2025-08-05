package com.homeservices.dto.request;


import lombok.Data;

@Data
public class UserRequestDto {
	private String firstName;
	private String lastName;
	private String phone;
	private String email;
	private String password;

}
