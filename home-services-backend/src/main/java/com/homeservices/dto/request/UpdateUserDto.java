package com.homeservices.dto.request;

import lombok.Data;

@Data
public class UpdateUserDto {

	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	private String profileImg;
	
}
