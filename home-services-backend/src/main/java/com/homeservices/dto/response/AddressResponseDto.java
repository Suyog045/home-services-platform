package com.homeservices.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddressResponseDto {
    private Long id;
    private String address;
    private String city;
    private String state;
    private String country;
    private String pincode;
}
