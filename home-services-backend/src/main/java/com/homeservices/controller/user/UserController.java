package com.homeservices.controller.user;

import java.util.List;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.homeservices.dto.request.*;
import com.homeservices.dto.response.*;
import com.homeservices.service.user.UserAddressService;
import com.homeservices.service.user.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@CrossOrigin
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;
	private final UserAddressService userAddressService;

	// user

	@PostMapping("/register") // Register a new user
	public ResponseEntity<UserResponseDto> registerUser(@RequestBody UserRequestDto dto) {
		System.out.println(dto);
		System.out.println("endpoint hit");
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.registerUser(dto));
	}

	@PostMapping("/login") // Login and receive token
	public ResponseEntity<UserResponseDto> userLogin(@RequestBody UserLoginDto dto) {
		return ResponseEntity.ok(userService.userLogin(dto));
	}

	@PutMapping("/{id}") // Update user profile
	public ResponseEntity<UserResponseDto> updateUser(@RequestBody UpdateUserDto dto, @PathVariable Long id) {
		return ResponseEntity.ok(userService.updateUser(id, dto));
	}

	@DeleteMapping("/{id}") // Delete user profile
	public ResponseEntity<ApiResponse> deleteUser(@PathVariable Long id) {
		return ResponseEntity.ok(userService.deleteUser(id));
	}
	
	@PutMapping("/{userId}/password") // update password 
	public ResponseEntity<ChangePasswordDto> updatePassword(@PathVariable Long userId , @RequestBody UpdatePasswordDto dto){
		return ResponseEntity.ok(userService.updatePassword(userId,dto));
	}


	// user address

	@PostMapping("/{userId}/addresses") // Add user address
	public ResponseEntity<AddressResponseDto> addAddress(@PathVariable Long userId, @RequestBody AddressRequestDto dto) {
		AddressResponseDto response = userAddressService.addAddress(userId, dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}

	@GetMapping("/{userid}/addresses") // get User Address
	public ResponseEntity<List<AddressResponseDto>> getUserAddresses(@PathVariable("userid") Long id) {
		return ResponseEntity.ok(userAddressService.getUserAddresses(id));
	}

	@PutMapping("/{userid}/addresses/{addressid}") // update User Address
	public ResponseEntity<AddressResponseDto> updateAddress(@PathVariable("userid") Long userId,
			@RequestBody UpdateAddressDto dto, @PathVariable("addressid") Long addressId) {
		return ResponseEntity.ok(userAddressService.updateAddress(userId, dto, addressId));
	}

	@DeleteMapping("/{userId}/addresses/{addressId}") // delete user address
	public ResponseEntity<ApiResponse> deleteAddressByUserIdAndAddressId(@PathVariable Long userId,
			@PathVariable Long addressId) {
		return ResponseEntity.ok(userAddressService.deleteAddressByUserIdAndAddressId(userId, addressId));
	}

}
