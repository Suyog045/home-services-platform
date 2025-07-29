package com.homeservices.service;

import org.springframework.stereotype.Service;

import com.homeservices.dao.CategoryDao;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class CategoryServiceImp implements CategoryService{
	private final CategoryDao categoryDao;
}
