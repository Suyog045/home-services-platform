package com.homeservices.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "user_address")

public class UserAddress extends BaseEntity {

	@Column(name = "address")
	private String address;
	@Column(name = "pincode")
	private String pincode;
	@Column(name = "city")
	private String city;
	@Column(name = "state")
	private String state;
	@Column(name = "is_deleted")
	private boolean isDeleted;
}
