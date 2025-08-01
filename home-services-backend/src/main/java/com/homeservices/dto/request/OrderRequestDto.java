package com.homeservices.dto.request;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

import lombok.Data;

@Data
public class OrderRequestDto {
	private Long userId;
    private Long partnerId;
    private Long serviceId;
    private LocalDate serviceDate;
    private LocalTime serviceTime;
    private BigDecimal totalCost;
}
