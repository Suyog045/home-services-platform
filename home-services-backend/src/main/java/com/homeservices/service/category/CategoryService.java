package com.homeservices.service.category;

import java.util.List;

import com.homeservices.dto.request.CategoryRequestDto;
import com.homeservices.dto.request.ProvidedServiceRequestDto;
import com.homeservices.dto.response.ApiResponse;
import com.homeservices.dto.response.CategoryResponseDTO;
import com.homeservices.dto.response.PartnerResponseDTO;
import com.homeservices.entities.Category;
import com.homeservices.entities.Partner;
import com.homeservices.entities.ProvidedService;

public interface CategoryService {

	List<CategoryResponseDTO> getAllCategories();

	//todo
	ApiResponse addNewCategory(CategoryRequestDto dto);

	CategoryResponseDTO getCategoryById(Long categoryId);

	//todo
	ApiResponse updateCategory(Long categoryId, CategoryRequestDto dto);

	//todo
	ApiResponse deleteCatgory(Long categoryId);

	List<ProvidedService> getServicesByCategoryId(Long categoryId);

	List<PartnerResponseDTO> getPartnersByCategoryId(Long categoryId);
	
}
