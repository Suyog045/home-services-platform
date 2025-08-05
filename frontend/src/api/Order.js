import axios from "axios";
import { CREATE_ORDER, GET_ORDERS_BY_USER_ID } from "./config";


export const placeOrder = async (userId, orderData) => {
  try {
    const response = await axios.post(CREATE_ORDER(userId), orderData);
    return response.data;
  } catch (error) {
    console.error("Order creation failed", error);
    throw error;
  }
};

export const getOrdersByUserId = async (userId) => {
  try {
    const response = await axios.get(GET_ORDERS_BY_USER_ID(userId));
    return response.data;
  } catch (error) {
    console.error("Error fetching orders by user ID", error);
    throw error;
  }
}