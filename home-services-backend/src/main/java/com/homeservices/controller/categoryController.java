package com.homeservices.controller;

import org.springframework.stereotype.Controller;

import com.homeservices.service.CategoryService;

import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
public class categoryController {
	private final CategoryService categoryService; 
	
}
