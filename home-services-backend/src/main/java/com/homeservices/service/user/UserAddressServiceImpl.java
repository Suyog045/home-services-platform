package com.homeservices.service.user;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeservices.custom_exceptions.ApiException;
import com.homeservices.custom_exceptions.ResourceNotFoundException;
import com.homeservices.dao.UserAddressRepository;
import com.homeservices.dao.UserRepository;
import com.homeservices.dto.request.AddressRequestDto;
import com.homeservices.dto.request.UpdateAddressDto;
import com.homeservices.dto.response.AddressResponseDto;
import com.homeservices.dto.response.ApiResponse;
import com.homeservices.entities.User;
import com.homeservices.entities.UserAddress;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserAddressServiceImpl implements UserAddressService {

	private final UserAddressRepository userAddressRepository;
	private final UserRepository userRepository;
	private final ModelMapper addressMapper;

	@Override
	public AddressResponseDto addAddress(Long userId, AddressRequestDto dto) {
	    User user = userRepository.findByIdAndIsDeletedFalse(userId)
	            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
	    UserAddress newAddress = addressMapper.map(dto, UserAddress.class);
	    newAddress.setDeleted(false); 
	    user.getAddresses().add(newAddress);
	    userRepository.save(user);
	    return addressMapper.map(newAddress, AddressResponseDto.class);
	}


	@Override
	public List<AddressResponseDto> getUserAddresses(Long id) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("user not found "));
		List<UserAddress> userAddresses = user.getAddresses();
		List<UserAddress> activeUserAddresses = userAddresses.stream()
				.filter(address -> !Boolean.TRUE.equals(address.isDeleted())).collect(Collectors.toList());
		List<AddressResponseDto> responseDtos = activeUserAddresses.stream()
				.map(address -> addressMapper.map(address, AddressResponseDto.class)).collect(Collectors.toList());
		return responseDtos;
	}

	@Override
	public AddressResponseDto updateAddress(Long userId, UpdateAddressDto dto, Long addressId) {
		User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("user not found"));
		UserAddress address = userAddressRepository.findById(addressId)
				.orElseThrow(() -> new ResourceNotFoundException("Address not found"));
		boolean belongsToUser = user.getAddresses().stream()
				.anyMatch(addr -> addr.getId().equals(addressId) && !addr.isDeleted());

		if (!belongsToUser) {
			throw new ApiException("Address does not belong to the user");
		}
		address.setAddress(dto.getAddress());
		address.setCity(dto.getCity());
		address.setState(dto.getState());
		address.setPincode(dto.getPincode());
		address.setCountry(dto.getCountry());

		return addressMapper.map(userAddressRepository.save(address), AddressResponseDto.class);
	}

	@Override
	public ApiResponse deleteAddressByUserIdAndAddressId(Long userId, Long addressId) {
		User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("user not found"));
		UserAddress userAddress = userAddressRepository.findById(addressId)
				.orElseThrow(() -> new ResourceNotFoundException("address not found !!"));
		List<UserAddress> addresses = user.getAddresses();
		for (UserAddress address : addresses) {
			if (address.getId().equals(userAddress.getId())) {
				address.setDeleted(true);
				break;
			}

		}

		userRepository.save(user);

		return new ApiResponse("user address having addressId : " + addressId + " is deleted ");
	}

}
