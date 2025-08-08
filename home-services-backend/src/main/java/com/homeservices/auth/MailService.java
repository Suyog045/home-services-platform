package com.homeservices.auth;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class MailService {
	 private final JavaMailSender mailSender;

	    public void sendResetPasswordEmail(String toEmail, String resetLink) {
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setTo(toEmail);
	        message.setSubject("Reset Your Password");
	        message.setText("Click the link to reset your password:\n\n" + resetLink);
	        mailSender.send(message);
	    }

}
