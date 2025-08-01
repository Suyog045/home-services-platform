package com.homeservices.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homeservices.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	

}
