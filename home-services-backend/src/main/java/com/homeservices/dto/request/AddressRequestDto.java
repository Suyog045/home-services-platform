package com.homeservices.dto.request;

import lombok.Data;

@Data
public class AddressRequestDto {
	
	private String address;
	private String pincode;
	private String city;
	private String state;

}
