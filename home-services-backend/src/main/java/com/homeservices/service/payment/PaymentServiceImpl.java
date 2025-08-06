package com.homeservices.service.payment;

import java.security.NoSuchAlgorithmException;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.apache.tomcat.util.buf.HexUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeservices.dao.OrderRepository;
import com.homeservices.dto.request.PaymentVerificationDto;
import com.homeservices.entities.Order;
import com.homeservices.utils.OrderStatus;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    private final OrderRepository orderRepo;

    @Value("${razorpay.secret.key}")
    private String secretKey;

    @Override
    public boolean verifyPayment(PaymentVerificationDto dto) throws Exception {

        String data = dto.getRazorpayOrderId() + "|" + dto.getRazorpayPaymentId();
        String generatedSignature = generateSignature(data);

        if (generatedSignature.equals(dto.getRazorpaySignature())) {
            Order order = orderRepo.findById(dto.getOrderId())
                    .orElseThrow(() -> new RuntimeException("Order not found"));

            order.setOrderStatus(OrderStatus.PAID);
            orderRepo.save(order);
            return true;
        }

        return false;
    }

    private String generateSignature(String data) throws Exception {
        Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
        SecretKeySpec secret_key = new SecretKeySpec(secretKey.getBytes(), "HmacSHA256");
        sha256_HMAC.init(secret_key);

        byte[] hash = sha256_HMAC.doFinal(data.getBytes());
        return HexUtils.toHexString(hash);
    }
}