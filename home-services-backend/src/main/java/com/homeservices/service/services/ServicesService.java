package com.homeservices.service.services;

import java.util.List;

import com.homeservices.dto.request.CategoryRequestDto;
import com.homeservices.dto.request.ServiceRequestDto;
import com.homeservices.entities.Service;


public interface ServicesService {
	List<Service> getAllServices();

	String addNewService(CategoryRequestDto dto);

	ServiceRequestDto getServiceById(Long serviceId);

	String updateService(Long serviceId, ServiceRequestDto dto);

	String deleteService(Long serviceId);
}
