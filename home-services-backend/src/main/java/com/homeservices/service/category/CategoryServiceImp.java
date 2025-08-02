package com.homeservices.service.category;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.homeservices.dao.CategoryRepository;
import com.homeservices.dto.request.CategoryRequestDto;
import com.homeservices.dto.request.ServiceRequestDto;
import com.homeservices.entities.Category;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class CategoryServiceImp implements CategoryService{
	private final CategoryRepository categoryDao;
	private ModelMapper modelMapper;
	@Override
	public List<Category> getAllCategories() {
		
		return categoryDao.findAll();
	}
	@Override
	public String addNewCategory(CategoryRequestDto dto) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public CategoryRequestDto getCategoryById() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String updateCategory(Long categoryId, CategoryRequestDto dto) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String deleteCatgory(Long categoryId) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
//	@Override
//	public ApiResponse addNewCategory(CategoryDTO dto) {
//		
//	}
	
	
	
}
