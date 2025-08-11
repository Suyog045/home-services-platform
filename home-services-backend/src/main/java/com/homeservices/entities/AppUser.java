package com.homeservices.entities;

import java.time.LocalDateTime;

import com.homeservices.utils.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AppUser extends BaseEntity {
	@Column(unique = true, nullable = false)
	private String email;
	@Column(nullable = false)
	private String password;
	@Enumerated(EnumType.STRING)
	private Role role;
	private Long referenceId;
	private String entityType;
	@Column(name = "verify_token")
	private String verifyToken;
	@Column(name = "verify_token_expiry")
	private LocalDateTime verifyTokenExpiry;

}
