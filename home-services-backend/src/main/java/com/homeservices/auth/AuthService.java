package com.homeservices.auth;

import com.homeservices.dto.request.ResetPasswordRequest;

public interface AuthService {
	AuthResponseDTO login(AuthRequestDTO request);

	void initiatePasswordReset(String email);
	void resetPassword(ResetPasswordRequest request);

	void validateResetToken(String token);
}
