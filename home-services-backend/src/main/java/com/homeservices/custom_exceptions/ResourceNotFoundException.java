package com.homeservices.custom_exceptions;

@SuppressWarnings("serial")
public class ResourceNotFoundException extends RuntimeException{
	public ResourceNotFoundException(String errMsg) {
		super(errMsg);
	}
}
