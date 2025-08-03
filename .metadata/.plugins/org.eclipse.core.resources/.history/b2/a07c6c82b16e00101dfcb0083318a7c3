package com.homeservices.entities;

import java.time.LocalDate;

import org.hibernate.annotations.CreationTimestamp;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(callSuper = true)
@Entity
@NoArgsConstructor

@Table(name = "Service")
public class Service extends BaseEntity{
	@Column(name = "service_id")
	private int serviceId;
	private String name;
	private String description;
	private double price;
	@Column(name = "is_active")
	private boolean isActive;
	
	@JoinColumn(name = "category_id")
	@ManyToOne
	private Category category;
}
