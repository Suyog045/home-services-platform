package com.homeservices.dto.request;

import lombok.Data;

@Data
public class PaymentVerificationDto {
	private String razorpayPaymentId;
    private String razorpayOrderId;
    private String razorpaySignature;
    private Long orderId;
}
