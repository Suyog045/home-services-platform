package com.homeservices.service.partner;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeservices.dao.PartnerRepository;
import com.homeservices.dto.request.PartnerRequestDTO;
import com.homeservices.dto.request.VerifyPartnerDTO;
import com.homeservices.dto.response.ApiResponse;
import com.homeservices.dto.response.PartnerOrderDTO;
import com.homeservices.dto.response.PartnerResponseDTO;
import com.homeservices.dto.response.PartnerServiceDTO;
import com.homeservices.entities.Partner;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class PartnerServiceImpl implements PartnerService {

	private final PartnerRepository partnerRepository;
	private ModelMapper mapper;

	@Override
	public ApiResponse addPartner(PartnerRequestDTO partnerreq) {

		if (partnerRepository.existsByEmail(partnerreq.getEmail())) {
			return new ApiResponse("Email Already Registered");
		}

		if (partnerRepository.existsByPhoneNumber(partnerreq.getPhoneNumber())) {
			return new ApiResponse("Phone Number Already Registered");
		}

		Partner partner = mapper.map(partnerreq, Partner.class);

		return new ApiResponse("Partner Added with Id " + partnerRepository.save(partner).getId());
	}

	@Override
	public PartnerResponseDTO getPartner(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ApiResponse updatePartner(Long id, PartnerRequestDTO partner) {
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
