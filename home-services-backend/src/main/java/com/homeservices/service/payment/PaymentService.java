package com.homeservices.service.payment;

import com.homeservices.dto.request.PaymentVerificationDto;

public interface PaymentService {
	boolean verifyPayment(PaymentVerificationDto dto) throws Exception;
}
