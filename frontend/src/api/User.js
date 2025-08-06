import axios from "axios";
import { CREATE_USER_ADDRESS, DELETE_USER_ADDRESS, GET_USER_ADDRESSES, LOGIN_USER, REGISTER_USER, UPDATE_USER_ADDRESS, UPDATE_USER_PASSWORD } from "./config";
 
export const userRegistration = async (userData, ) => {
  try {
    const response = await axios.post(REGISTER_USER, userData);
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
  throw error;
  }
};

export const userLogin = async (credentials) => {
  try {
    const response = await axios.post(LOGIN_USER, credentials);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

export const getUserAddresses = async (userId) => {
  try {
    const response = await axios.get(GET_USER_ADDRESSES(userId));
    return response.data;
  } catch (error) {
    console.error("Error fetching addresses:", error.response?.data || error.message);
    throw error;
  }
};

export const addUserAddress = async (userId, addressData) => {
  try {
    const response = await axios.post(CREATE_USER_ADDRESS(userId), addressData);
    return response.data;
  } catch (error) {
    console.error("Error adding address:", error.response?.data || error.message);
    throw error;
  }
};

export const updateUserAddress = async (userId, addressId, addressData) => {
  try {
    const response = await axios.put(UPDATE_USER_ADDRESS(userId, addressId), addressData);
    return response.data;
  } catch (error) {
    console.error("Error updating address:", error.response?.data || error.message);
    throw error;
  }
};

export const deleteUserAddress = async (userId, addressId) => {
  try {
    const response = await axios.delete(DELETE_USER_ADDRESS(userId, addressId));
    return response.data;
  } catch (error) {
    console.error("Error deleting address:", error.response?.data || error.message);
    throw error;
  }
};


export const updateUserPassword = async (userId, passwordData) => {
  try {
    const response = await axios.put(UPDATE_USER_PASSWORD(userId, 'password'), passwordData);
    return response.data;
  } catch (error) {
    console.error("Error updating password:", error.response?.data || error.message);
    throw error;
  }
};





