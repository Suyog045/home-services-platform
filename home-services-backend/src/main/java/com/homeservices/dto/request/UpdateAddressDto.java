package com.homeservices.dto.request;

import lombok.Data;

@Data
public class UpdateAddressDto {
    private String address;
    private String city;
    private String state;
    private String pincode;
    private String country;
}