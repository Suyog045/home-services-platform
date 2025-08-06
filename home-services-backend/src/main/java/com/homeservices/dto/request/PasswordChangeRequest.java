package com.homeservices.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PasswordChangeRequest {
	private String newPassword;
    private String confirmPassword;
}
