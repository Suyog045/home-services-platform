package com.homeservices.service.user;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeservices.dto.request.AddressRequestDto;
import com.homeservices.dto.request.UserLoginDto;
import com.homeservices.dto.request.UserRequestDto;
import com.homeservices.entities.User;



@Service
@Transactional

public class UserServiceImpl implements UserService {

	@Override
	public String createUser(UserRequestDto dto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String userLogin(UserLoginDto dto) {
		// TODO Auto-generated method stub
		return null;
	}

	
	@Override
	public Object updateUser(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object deleteUser(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object getUserById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object getAddresses(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object addAddress(Long id, AddressRequestDto dto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object updateAddress(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object deleteAddressById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}


		
		
	
	

}
