package com.homeservices.service.order;

import java.util.List;
import java.util.Optional;

import com.homeservices.dto.request.OrderRequestDto;
import com.homeservices.dto.response.ApiResponse;
import com.homeservices.entities.Order;

public interface OrderService {
	ApiResponse createOrder(OrderRequestDto dto);

	Order getOrderById(Long id);

	List<Order> getOrdersByUserId(Long id);

	List<Order> getOrdersByPartnerId(Long id);

	ApiResponse updateOrderStatus(Long id);

	ApiResponse cancelOrderById(Long id);
}
