package com.homeservices.dto.request;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.homeservices.entities.UserAddress;

public record OrderRequestDto(
		List<Long> serviceIds,
		LocalDate serviceDate,
		LocalTime serviceTime,
		AddressRequestDto address
		) {
}
