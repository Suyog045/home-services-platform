package com.homeservices.controller.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.homeservices.dto.request.AddressRequestDto;
import com.homeservices.dto.request.UpdateUserDto;
import com.homeservices.dto.request.UserLoginDto;
import com.homeservices.dto.request.UserRequestDto;
import com.homeservices.service.user.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/user")
public class UserController {
	private  UserService userService;
	
//	POST   /api/users/register              
	   @PostMapping("/register")
	   public ResponseEntity<?> createUser(@RequestBody UserRequestDto dto  ){
		  return ResponseEntity.status(HttpStatus.CREATED)
				  .body(userService.createUser(dto));
		   
	   }
//	POST   /api/users/login                  → Login and receive token
	   @PostMapping("/login")
	   public ResponseEntity<?> userLogin(@RequestBody UserLoginDto dto){
		   return ResponseEntity.ok().build();
	   }
//	GET    /api/users/{id}                   → Get user by ID
	  @GetMapping("/{id}")
	  public ResponseEntity<?> getUserById( @PathVariable Long id){
		  return ResponseEntity.ok(userService.getUserById(id));
	  }
	   
	  
//	PUT    /api/users/{id}                   → Update user profile
	  @PutMapping("/{id}")
	  public ResponseEntity<?> updateUser(@RequestBody UpdateUserDto dto, @PathVariable Long id){
		  return ResponseEntity.ok(userService.updateUser(id));
	  }
//	DELETE /api/users/{id}                   → Soft-delete user
	  @DeleteMapping("/{id}")
	  public ResponseEntity<?> deleteUser(@PathVariable Long id){
		  return ResponseEntity.ok(userService.deleteUser(id));
	  }
//
//	GET    /api/users/{id}/addresses         → Get all addresses of user
		  @GetMapping("/{id}/addresses")
		  public ResponseEntity<?> getAddresses(@PathVariable Long id){
			  return ResponseEntity.ok(userService.getAddresses(id));
		  }
//	POST   /api/users/{id}/addresses         → Add a new address
		  @PostMapping("/{id}/addresses")
		  public ResponseEntity<?> addAddress(@RequestBody AddressRequestDto dto , @PathVariable Long id){
			  return ResponseEntity.status(HttpStatus.CREATED)
					  .body(userService.addAddress(id,dto));
		  }
//	PUT    /api/users/addresses/{addressId}  → Update address
		  @PutMapping("/address/{id}")
		  public ResponseEntity<?> updateAddress(@RequestBody AddressRequestDto dto, @PathVariable Long id){
			  return ResponseEntity.ok(userService.updateAddress(id));
		  }
//	DELETE /api/users/addresses/{addressId} → Delete address

		  @DeleteMapping("/address/{id}")
		  public ResponseEntity<?> deleteAddressById(@PathVariable Long id){
			  return ResponseEntity.ok(userService.deleteAddressById(id));
		  }

}
