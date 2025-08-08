package com.homeservices.service.order;

import java.util.List;
import com.homeservices.dto.request.OrderRequestDto;
import com.homeservices.dto.response.AllOrderResponseDto;
import com.homeservices.dto.response.ApiResponse;
import com.homeservices.dto.response.OrderResponse;
import com.homeservices.entities.Order;

public interface OrderService {
	ApiResponse createOrder(OrderRequestDto dto,Long userId);

	OrderResponse getOrderById(Long orderId);

	List<OrderResponse> getOrdersByUserId(Long userId);

	List<Order> getOrdersByPartnerId(Long partnerId);

	ApiResponse updateOrderStatus(Long orderId);

	ApiResponse cancelOrderById(Long orderId);

	List<AllOrderResponseDto> getAllOrders();

	List<Order> getOrdersByStatus(String status);
	
}
