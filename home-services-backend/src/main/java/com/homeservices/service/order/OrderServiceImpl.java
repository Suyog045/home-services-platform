package com.homeservices.service.order;

import java.net.URI;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeservices.custom_exceptions.ResourceNotFoundException;
import com.homeservices.dao.OrderRepository;
import com.homeservices.dao.PartnerRepository;
import com.homeservices.dao.ServiceRepository;
import com.homeservices.dao.UserAddressRepository;
import com.homeservices.dao.UserRepository;
import com.homeservices.dto.request.OrderRequestDto;
import com.homeservices.dto.response.AllOrderResponseDto;
import com.homeservices.dto.response.ApiResponse;
import com.homeservices.dto.response.OrderResponse;
import com.homeservices.entities.Order;
import com.homeservices.entities.Partner;
import com.homeservices.entities.User;
import com.homeservices.entities.UserAddress;
import com.homeservices.entities.ProvidedService;
import com.homeservices.utils.OrderStatus;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderServiceImpl implements OrderService {

	private final OrderRepository orderRepo;
	private final PartnerRepository partnerRepo;
	private final UserRepository userRepo;
	private final ServiceRepository serviceRepo;
	private final ModelMapper modelMapper;
	private final UserAddressRepository userAddressRepo;

	private UserAddress getOrAddAddress(User user, OrderRequestDto dto) {
		// Check for matching address
		Optional<UserAddress> matchingAddress = user.getAddresses().stream()
				.filter(addr -> addr.getAddress().equalsIgnoreCase(dto.address().getAddress())
						&& addr.getCity().equalsIgnoreCase(dto.address().getCity())
						&& addr.getState().equalsIgnoreCase(dto.address().getState())
						&& addr.getCountry().equalsIgnoreCase(dto.address().getCountry())
						&& addr.getPincode().equalsIgnoreCase(dto.address().getPincode()))
				.findFirst();

		if (matchingAddress.isPresent()) {
			return matchingAddress.get();
		}

		UserAddress newAddress = new UserAddress();
		newAddress.setAddress(dto.address().getAddress());
		newAddress.setCity(dto.address().getCity());
		newAddress.setState(dto.address().getState());
		newAddress.setCountry(dto.address().getCountry());
		newAddress.setPincode(dto.address().getPincode());
		newAddress.setDeleted(false);

		UserAddress savedAddress = userAddressRepo.save(newAddress);

		user.getAddresses().add(savedAddress);
		userRepo.save(user);

		return newAddress;
	}

	@Override
	public ApiResponse createOrder(OrderRequestDto dto, Long userId) {
		User user = userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User Not Found"));

		UserAddress selectedAddress = getOrAddAddress(user, dto);

		List<ProvidedService> services = serviceRepo.findAllById(dto.serviceIds());
		List<Order> newOrders = new ArrayList<>();
		for (ProvidedService providedService : services) {
			Order order = new Order();
			order.setServiceDate(dto.serviceDate());
			order.setServiceTime(dto.serviceTime());
			order.setService(providedService);
			order.setOrderStatus(OrderStatus.PENDING);
			order.setTotalCost(providedService.getPrice());
			order.setAddress(selectedAddress);
			newOrders.add(order);
			user.getOrders().add(order);
		}
		orderRepo.saveAll(newOrders);
		return new ApiResponse("Order Created Successfully");
	}

	@Override
	public OrderResponse getOrderById(Long orderId) {
		Order order = orderRepo.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("Order Not Found"));
		String serviceName = order.getService().getName();
		String address = order.getAddress().getAddress() + " " + order.getAddress().getCity() + " "
				+ order.getAddress().getState() + " " + order.getAddress().getCountry() + " "
				+ order.getAddress().getPincode();
		return new OrderResponse(
				order.getId(), 
				order.getServiceDate(),
				order.getServiceTime(), 
				order.getCompletionDate(),
				order.getOrderStatus(), 
				order.getTotalCost(), 
				serviceName, 
				address);
	}

	@Override
	public List<OrderResponse> getOrdersByUserId(Long userId) {
		User user = userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User Not Found"));
		List<Order> orders = user.getOrders();
		if (orders.isEmpty()) {
			throw new ResourceNotFoundException("No Orders Found");
		}
		List<OrderResponse> response = new ArrayList<>();
		for (Order order : orders) {
			String serviceName = order.getService().getName();
			String fullAddress = "No Address Provided";
			if (order.getAddress() != null) {
				UserAddress addr = order.getAddress();
				fullAddress = addr.getAddress() + ", " + addr.getCity() + ", " + addr.getState() + ", "
						+ addr.getCountry() + " - " + addr.getPincode();
			}
			OrderResponse dto = new OrderResponse(
					order.getId(),
					order.getServiceDate(),
					order.getServiceTime(),
					order.getCompletionDate(), 
					order.getOrderStatus(),
					order.getTotalCost(),
					serviceName, 
					fullAddress);
			response.add(dto);
			
		}
		return response;
	}

	@Override
	public List<Order> getOrdersByPartnerId(Long partnerId) {
		Partner partner = partnerRepo.findById(partnerId)
				.orElseThrow(() -> new ResourceNotFoundException("Partner Not Found"));
		List<Order> orders = partner.getMyOrders();
		if (orders.isEmpty()) {
			throw new ResourceNotFoundException("Orders Not Found");
		}
		return orders;
	}

	@Override
	public ApiResponse updateOrderStatus(Long orderId) {
		Order order = orderRepo.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("Order Not Found"));

		if (order.getOrderStatus().equals(OrderStatus.PENDING)) {
			order.setOrderStatus(OrderStatus.CONFIRMED);
		} else if (order.getOrderStatus().equals(OrderStatus.CONFIRMED)) {
			order.setOrderStatus(OrderStatus.INPROGRESS);
		} else if (order.getOrderStatus().equals(OrderStatus.INPROGRESS)) {
			order.setOrderStatus(OrderStatus.COMPLETED);
			order.setCompletionDate(LocalDate.now());
		}

		orderRepo.save(order);
		return new ApiResponse("Order Status Updated");
	}

	@Override
	public ApiResponse cancelOrderById(Long orderId) {
		Order order = orderRepo.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("Order Not Found"));
		order.setOrderStatus(OrderStatus.CANCELLED);
		orderRepo.save(order);
		return new ApiResponse("Order Cancelled");
	}

	@Override
	public List<AllOrderResponseDto> getAllOrders() {
		List<Order> orders = orderRepo.findAll();
		if (orders.isEmpty()) {
			throw new ResourceNotFoundException("Orders Not Found");
		}
		return orders.stream().map(order -> {
			AllOrderResponseDto neworder = new AllOrderResponseDto();
			neworder.setId(order.getId());
			neworder.setOrderStatus(order.getOrderStatus());
			neworder.setCompletionDate(order.getCompletionDate());
			neworder.setService(order.getService().getName());
			neworder.setServiceDate(order.getServiceDate());
			neworder.setServiceTime(order.getServiceTime());
			neworder.setTotalCost(order.getTotalCost());
			neworder.setServiceId(order.getService().getId());
			return neworder;
		}).toList();
	}

	@Override
	public List<Order> getOrdersByStatus(String status) {
		OrderStatus orderStatus = OrderStatus.valueOf(status.toUpperCase());
		List<Order> orders = orderRepo.findByOrderStatus(orderStatus);
		if (orders.isEmpty()) {
			throw new ResourceNotFoundException("Orders Not Found By Status : " + status);
		}
		return orders;
	}

}
