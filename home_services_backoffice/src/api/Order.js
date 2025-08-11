import axios from "axios";
import { GET_ALL_ORDERS, ASSIGN_ORDER_TO_PARTNER } from "./Config";

export const getAllOrders = async () => {
  try {
    const response = await axios.get(GET_ALL_ORDERS);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    throw error;
  }
};

export const assignOrderToPartner = async (orderId, partnerId) => {
  try {
    const response = await axios.put(ASSIGN_ORDER_TO_PARTNER(orderId, partnerId));
    console.log("Order assigned successfully:", response);
    return response.data;
  } catch (error) {
    console.error("Error assigning order to partner:", error.response?.data || error.message);
    throw error;
  }
};