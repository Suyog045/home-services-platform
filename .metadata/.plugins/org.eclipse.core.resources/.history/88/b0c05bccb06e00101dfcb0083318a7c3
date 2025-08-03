package com.homeservices.entities;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

import com.homeservices.utils.OrderStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Orders")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Order extends BaseEntity {
	@Column(name = "partner_id")
	@NotNull
	private Long partnerId;
	@NotNull
	@Column(name = "user_id")
	private Long userId;
	@NotNull
	@Column(name = "service_id")
	private Long serviceId;
	@NotNull
	@Column(name = "service_date")
	private LocalDate serviceDate;
	@NotNull
	@Column(name="service_time")
	private LocalTime serviceTime;
	@NotNull
	@Column(name = "completion_date")
	private LocalDate completionDate;
	@NotNull
	@Column(name = "order_status")
	@Enumerated(EnumType.STRING)
	private OrderStatus orderStatus;
	@Column(name = "total_cost")
	@NotNull
	private BigDecimal totalCost;
}
