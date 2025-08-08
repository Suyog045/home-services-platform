const BASE_URL = "https://localhost:44335/api/admin";

export const GET_VERIFIED_PARTNERS = `${BASE_URL}/orders/partner/verified`;
export const GET_UNVERIFIED_PARTNERS = `${BASE_URL}/orders/partner/unverified`;
export const GET_ALL_PARTNERS = `${BASE_URL}/orders/partner`;
export const DELETE_PARTNER = (id) => `${BASE_URL}/orders/partner/${id}`;

export const VERIFY_PARTNER = (id) => `${BASE_URL}/orders/partner/${id}/verify`;
export const GET_ALL_ORDERS = `${BASE_URL}/orders/orders`;

export const ASSIGN_ORDER_TO_PARTNER = (orderId,partnerId) =>`${BASE_URL}/orders/partner/${partnerId}/orders/${orderId}`;

export const GET_PARTNERS_BY_CATEGORY_ID = (categoryId) => `${BASE_URL}/orders/${categoryId}/partners`;


