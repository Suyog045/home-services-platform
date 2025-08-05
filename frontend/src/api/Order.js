import axios from "axios";
import { CREATE_ORDER } from "./config";


export const placeOrder = async (userId, orderData) => {
  try {
    const response = await axios.post(CREATE_ORDER(userId), orderData);
    return response.data;
  } catch (error) {
    console.error("Order creation failed", error);
    throw error;
  }
};