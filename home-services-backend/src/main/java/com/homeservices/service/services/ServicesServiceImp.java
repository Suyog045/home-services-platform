package com.homeservices.service.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeservices.dao.ServiceRepository;
import com.homeservices.dto.request.CategoryRequestDto;
import com.homeservices.dto.request.ServiceRequestDto;


@Service
@Transactional
public class ServicesServiceImp implements ServicesService{
	private ServiceRepository serviceDao;
	
	@Override
	public List<com.homeservices.entities.Service> getAllServices() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String addNewService(CategoryRequestDto dto) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public ServiceRequestDto getServiceById(Long serviceId) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String updateService(Long serviceId, ServiceRequestDto dto) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String deleteService(Long serviceId) {
		// TODO Auto-generated method stub
		return null;
	}
}
