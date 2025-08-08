package com.homeservices.auth;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.homeservices.dao.AppUserRepository;
import com.homeservices.dao.UserRepository;
import com.homeservices.dto.request.ResetPasswordRequest;
import com.homeservices.entities.AppUser;
import com.homeservices.security.JWTUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

	private final AuthenticationManager authManager;
	private final AppUserRepository appUserRepository;
	private final JWTUtil jwtUtil;
	private final MailService mailService;
	private final PasswordEncoder passwordEncoder;


	@Override
	public AuthResponseDTO login(AuthRequestDTO request) {
		Authentication authentication = authManager.authenticate(
				new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

		AppUser appUser = appUserRepository.findByEmail(request.getEmail())
				.orElseThrow(() -> new RuntimeException("User not found"));

		String token = jwtUtil.generateToken(appUser);

		return AuthResponseDTO.builder()
				.token(token)
				.role(appUser.getRole().name())
				.entityType(appUser.getEntityType())
				.id(appUser.getReferenceId())
				.build();
	}

	@Override
	public void initiatePasswordReset(String email) {
		AppUser user = appUserRepository.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("User not found"));

		String token = UUID.randomUUID().toString();
		user.setVerifyToken(token);
		user.setVerifyTokenExpiry(LocalDateTime.now().plusMinutes(30));
		appUserRepository.save(user);

		String resetLink = "http://localhost:9090/reset-password?token=" + token;
		mailService.sendResetPasswordEmail(user.getEmail(), resetLink);
	}

	@Override
	public void resetPassword(ResetPasswordRequest request) {
		AppUser user = appUserRepository.findByVerifyToken(request.getToken())
				.orElseThrow(() -> new RuntimeException("Invalid or expired token"));
		
		if (user.getVerifyTokenExpiry().isBefore(LocalDateTime.now())) {
			throw new RuntimeException("Token has expired");
		}

		if (!request.getNewPassword().equals(request.getConfirmPassword())) {
			throw new RuntimeException("Passwords do not match");
		}

		user.setPassword(passwordEncoder.encode(request.getNewPassword()));
		user.setVerifyToken(null);
		user.setVerifyTokenExpiry(null);
		appUserRepository.save(user);
	}

	@Override
	public void validateResetToken(String token) {
		AppUser appUser = appUserRepository.findByVerifyToken(token).orElseThrow(()->new RuntimeException("invalid or expired token "));
		if (appUser.getVerifyToken() == null ||
				appUser.getVerifyTokenExpiry() == null ||
						appUser.getVerifyTokenExpiry().isBefore(LocalDateTime.now())) {
		        throw new RuntimeException("Token is expired or already used");
		    }
	}
}
