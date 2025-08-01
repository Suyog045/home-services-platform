package com.homeservices.utils;

public enum OrderStatus {
	PENDING,       // Waiting for partner assignment
    CONFIRMED,     // Accepted by partner
    IN_PROGRESS,   // Partner started job
    COMPLETED,     // Job done
    CANCELLED      // Cancelled by user/admin
}
