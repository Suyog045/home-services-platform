package com.homeservices.controller.test;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {
	@GetMapping
	public ResponseEntity<String> test() {
		System.out.println("Test hit");
		return ResponseEntity.ok("Test Passed");
	}
}
