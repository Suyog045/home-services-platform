package com.homeservices.entities;

import java.time.LocalDate;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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

@Table(name = "Category")
public class Category extends BaseEntity{
	private String name;
	private String description;
	@Column(name = "no_of_partners")
	private int noOfPartners;
	@CreationTimestamp
	@Column(name = "deleted_date")
	private LocalDate deletionAt;
}
