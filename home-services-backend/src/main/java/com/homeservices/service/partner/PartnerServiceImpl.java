package com.homeservices.service.partner;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeservices.dto.request.AddPartnerDTO;
import com.homeservices.dto.request.VerifyPartnerDTO;
import com.homeservices.dto.response.ApiResponse;
import com.homeservices.dto.response.PartnerOrderDTO;
import com.homeservices.dto.response.PartnerResponseDTO;
import com.homeservices.dto.response.PartnerServiceDTO;

@Service
@Transactional
public class PartnerServiceImpl implements PartnerService {

	@Override
	public ApiResponse addPartner(AddPartnerDTO partner) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public PartnerResponseDTO getPartner(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ApiResponse updatePartner(Long id, AddPartnerDTO partner) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ApiResponse deletePartner(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PartnerOrderDTO> getPartnerOrders(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Double getTotalEarning(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PartnerServiceDTO> getPartnerServices(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ApiResponse verifyPartner(Long id, VerifyPartnerDTO verifypartnerDTO) {
		// TODO Auto-generated method stub
		return null;
	}

}
