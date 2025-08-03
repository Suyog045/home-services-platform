package com.homeservices.service.user;

import org.springframework.http.ResponseEntity;

import com.homeservices.dto.request.AddressRequestDto;
import com.homeservices.dto.request.UserLoginDto;
import com.homeservices.dto.request.UserRequestDto;
import com.homeservices.entities.User;

public interface UserService {

     String createUser(UserRequestDto dto);
     String userLogin(UserLoginDto dto);
	
	Object updateUser(Long id);
	Object deleteUser(Long id);
	Object getUserById(Long id);
	Object getAddresses(Long id);
	Object addAddress(Long id, AddressRequestDto dto);
	Object updateAddress(Long id);
	Object deleteAddressById(Long id);
	

	

}
