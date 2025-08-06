package com.homeservices.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddressRequestDto {
    private String address;
    private String city;
    private String state;
    private String country;
    private String pincode;
}
