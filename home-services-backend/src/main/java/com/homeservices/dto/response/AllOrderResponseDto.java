package com.homeservices.dto.response;

import java.time.LocalDate;
import java.time.LocalTime;

import com.homeservices.entities.ProvidedService;
import com.homeservices.entities.UserAddress;
import com.homeservices.utils.OrderStatus;

import lombok.Data;

@Data
public class AllOrderResponseDto {
	public Long id;
	public LocalDate serviceDate;
	public LocalTime serviceTime;
	public LocalDate completionDate;
	public OrderStatus orderStatus;
	public Double totalCost;
	public String service;
	public Long serviceId;
//	public String address;
}
