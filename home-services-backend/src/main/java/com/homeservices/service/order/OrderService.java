package com.homeservices.service.order;

import com.homeservices.dto.request.OrderRequestDto;
import com.homeservices.entities.Order;

public interface OrderService {
	Order createOrder(OrderRequestDto dto);
}
