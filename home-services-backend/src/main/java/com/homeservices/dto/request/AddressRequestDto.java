package com.homeservices.dto.request;

import lombok.Getter;

@Getter
public class AddressRequestDto {
	private String address;
	private String pincode;
	private String city;
	private String state;
	private String country;
}
