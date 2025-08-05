package com.homeservices.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homeservices.entities.Partner;

@Repository

public interface PartnerRepository extends JpaRepository<Partner, Long> {
	boolean existsByEmail(String email);

	boolean existsByPhoneNumber(String phoneNumber);

	List<Partner> findByIsVerifiedTrue();

	List<Partner> findByIsVerifiedFalse();

}
