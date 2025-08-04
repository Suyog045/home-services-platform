const BASE_URL = "http://localhost:8080"

export const GET_ALL_CATEGORIES = `${BASE_URL}/categories`
export const ADD_CATEGORY = `${BASE_URL}`;
export const GET_CATEGORY_BY_ID = (id) => `${BASE_URL}/categories/${id}`;
export const UPDATE_CATEGORY = (id) => `${BASE_URL}/categories/${id}`;
export const DELETE_CATEGORY = (id) => `${BASE_URL}/categories/${id}`;
export const GET_SERVICES_BY_CATEGORY_ID = (id) => `${BASE_URL}/categories/${id}/services`
export const GET_ALL_SERVICES = `${BASE_URL}/service`;
export const GET_SERVICE_BY_ID = (id) => `${BASE_URL}/service/${id}`;
export const CREATE_SERVICE = `${BASE_URL}/service`;
export const UPDATE_SERVICE = (id) => `${BASE_URL}/service/${id}`;
export const DELETE_SERVICE = (id) => `${BASE_URL}/service/${id}`;