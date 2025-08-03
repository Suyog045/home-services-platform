package com.homeservices.controller.order;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.homeservices.dto.request.OrderRequestDto;
import com.homeservices.entities.Order;
import com.homeservices.service.order.OrderService;



@RestController
@RequestMapping("/order")
public class OrderController {
	private OrderService orderService;
	
	@PostMapping
	public ResponseEntity<?> createOrder(@RequestBody OrderRequestDto dto){
		Order order = orderService.createOrder(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(order);
	}

}
