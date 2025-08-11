package com.homeservices.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.homeservices.dto.request.ResetPasswordRequest;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
	private final AuthService authService;

	@PostMapping("/login")
	public ResponseEntity<AuthResponseDTO> login(@RequestBody AuthRequestDTO request) {
		return ResponseEntity.ok(authService.login(request));
	}
	
	@PostMapping("/forgot-password")
	public ResponseEntity<String>forgotPassword(@RequestBody EmailRequest request){
		authService.initiatePasswordReset(request.getEmail());
        return ResponseEntity.ok("Password reset email sent");
	}
	
	@PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordRequest request) {
        authService.resetPassword(request);
        return ResponseEntity.ok("Password reset successfully");
    }
	
	@GetMapping("/validate-token")
	public ResponseEntity<String>validateToken(@RequestParam String token){
		authService.validateResetToken(token);
		return ResponseEntity.ok("token is valid");
	}
}
