package com.homeservices.dao;



import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.homeservices.entities.UserAddress;

@Repository
public interface UserAddressRepository extends JpaRepository<UserAddress, Long> {

	}
