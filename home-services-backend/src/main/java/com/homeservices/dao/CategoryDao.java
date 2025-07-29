package com.homeservices.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.homeservices.entities.Category;

public interface CategoryDao extends JpaRepository<Category, Long>{
	
}
