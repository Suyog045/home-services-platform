package com.homeservices.service.user;

import java.util.List;

import com.homeservices.dto.request.AddressRequestDto;
import com.homeservices.dto.request.UpdateAddressDto;
import com.homeservices.dto.response.AddressResponseDto;
import com.homeservices.dto.response.ApiResponse;

public interface UserAddressService {

	

	List<AddressResponseDto> getUserAddresses(Long id);

	AddressResponseDto updateAddress(Long id,UpdateAddressDto dto,  Long addressId);

	ApiResponse deleteAddressByUserIdAndAddressId(Long userId, Long addressId);

	AddressResponseDto addAddress(Long userId, AddressRequestDto dto);

	

	

}
