import axios from "axios";
import { CANCEL_ORDER, CREATE_ORDER, GET_ORDERS_BY_USER_ID } from "./config";

export const placeOrder = async (userId, orderData, token) => {
  try {
    const response = await axios.post(CREATE_ORDER(userId), orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Order creation failed", error.response?.data || error.message);
    throw error;
  }
};

export const getOrdersByUserId = async (userId, token) => {
  try {
    const response = await axios.get(GET_ORDERS_BY_USER_ID(userId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching orders by user ID", error.response?.data || error.message);
    throw error;
  }
};

export const cancelOrder = async (orderId, token) => {
  try {
    const response = await axios.delete(CANCEL_ORDER(orderId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error cancelling order", error.response?.data || error.message);
    throw error;
  }
};
