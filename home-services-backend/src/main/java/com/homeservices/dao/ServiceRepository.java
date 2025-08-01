package com.homeservices.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homeservices.entities.Service;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long>{

}
