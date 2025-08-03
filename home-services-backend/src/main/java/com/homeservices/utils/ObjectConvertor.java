package com.homeservices.utils;

import com.homeservices.dto.request.UserLoginDto;
import com.homeservices.entities.User;

public class ObjectConvertor {

	public static User name(UserLoginDto dto) {
	
		return new User();
	}
}
