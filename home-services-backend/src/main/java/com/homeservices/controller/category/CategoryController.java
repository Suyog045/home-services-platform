package com.homeservices.controller.category;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.homeservices.dto.request.CategoryRequestDto;
import com.homeservices.dto.request.ServiceRequestDto;
import com.homeservices.dto.response.CategoryResponse;
import com.homeservices.service.category.CategoryService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/category")
public class CategoryController {
	private final CategoryService categoryService; 
	
//	GET/api/categories (List all categories)
	@GetMapping
	public ResponseEntity<?> getAllCategories() {
		return ResponseEntity.ok(categoryService.getAllCategories());
	}
	
	
//	POST/api/categories (Create a category)
	@PostMapping
    public ResponseEntity<?> addNewCategory(CategoryRequestDto dto) {
//		String response = categoryService.addNewCategory(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryService.addNewCategory(dto));
    }
//	GET/api/categories/{id}  (Get a specific category)
	@GetMapping(path = "/{categoryId}")
	public ResponseEntity<?> getCategoryById(@PathVariable Long categoryId){
		return ResponseEntity.ok(categoryService.getCategoryById());
	}
		
//	PUT /api/categories/{id} - Update category  
	@PostMapping(path = "/{categoryId}")
	public ResponseEntity<?> updateCategory(@PathVariable Long categoryId,@RequestBody CategoryRequestDto dto){
		return ResponseEntity.ok(categoryService.updateCategory(categoryId,dto));
	}
	
//	DELETE /api/categories/{id} - Delete category 
	@DeleteMapping(path = "/{categoryId}")
	public ResponseEntity<?> deleteCategory(Long categoryId){
		return ResponseEntity.ok(categoryService.deleteCatgory(categoryId));
	}
	
	
}
