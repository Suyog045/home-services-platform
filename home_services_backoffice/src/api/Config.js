const BASE_URL = "http://localhost:8080"

export const GET_VERIFIED_PARTNERS = `${BASE_URL}/partner/verified`;

export const GET_ALL_PARTNERS = `${BASE_URL}/partner`;
export const DELETE_PARTNER = (id) => `${BASE_URL}/partner/${id}`;
export const VERIFY_PARTNER = (id) => `${BASE_URL}/partner/${id}/verify`;
