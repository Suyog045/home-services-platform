import axios from "axios";
import { GET_VERIFIED_PARTNERS, GET_ALL_PARTNERS, DELETE_PARTNER, VERIFY_PARTNER } from "./Config";

// Get all verified partners
export const getVerifiedPartners = async () => {
  try {
    const response = await axios.get(GET_VERIFIED_PARTNERS);
    return response.data;
  } catch (error) {
    console.error("Error fetching verified partners:", error.response?.data || error.message);
    throw error;
  }
};
