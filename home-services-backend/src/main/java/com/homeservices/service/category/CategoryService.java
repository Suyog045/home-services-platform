package com.homeservices.service.category;

import java.util.List;

import com.homeservices.dto.request.CategoryRequestDto;
import com.homeservices.dto.request.ServiceRequestDto;
import com.homeservices.dto.response.CategoryResponse;
import com.homeservices.entities.Category;
import com.homeservices.entities.Service;

public interface CategoryService {

	List<Category> getAllCategories();

	//todo
	String addNewCategory(CategoryRequestDto dto);

	CategoryRequestDto getCategoryById();

	//todo
	String updateCategory(Long categoryId, CategoryRequestDto dto);

	//todo
	String deleteCatgory(Long categoryId);
	
}
