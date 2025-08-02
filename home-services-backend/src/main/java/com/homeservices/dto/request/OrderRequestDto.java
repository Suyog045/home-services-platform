package com.homeservices.dto.request;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

public record OrderRequestDto(Long userId,
		Long partnerId,
		Long serviceId,
		LocalDate serviceDate,
		LocalTime serviceTime,
		BigDecimal totalCost) {

}
