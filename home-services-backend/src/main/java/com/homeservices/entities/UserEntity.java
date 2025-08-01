package com.homeservices.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
@Table(name = "user")

public class UserEntity extends BaseEntity {

	@Column(name = "first_name", nullable = false)
	private String firstName;
	@Column(name = "last_name", nullable = false)
	private String lastName;
	@Column(name = "email", nullable = false)
	private String email;
	@Column(name = "phone", nullable = false)
	private String phone;
	@Column(name = "pasword_hash", nullable = false)
	private String password;
	@Column(name = "profile_img", nullable = false)
	private String profileImg;
	@Column(name = "birth_date", nullable = false)
	private LocalDate birthDate;
	@Column(name = "is_deleted", nullable = false)
	private boolean isDeleted;
	@Column(name = "auth_token", nullable = false)
	private String authToken;
	@Column(name = "auth_token_expiry", nullable = false)
	private LocalDate authTokenExpiry;

}
