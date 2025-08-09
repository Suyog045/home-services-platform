import axios from "axios";
import { CREATE_USER_ADDRESS, DELETE_USER_ADDRESS, GET_USER_ADDRESSES, GET_USER_BY_ID, LOGIN_USER, REGISTER_USER, UPDATE_USER_ADDRESS, UPDATE_USER_PASSWORD } from "./config";
 
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

export const getUserAddresses = async (userId, token) => {
  try {
    const response = await axios.get(GET_USER_ADDRESSES(userId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching addresses:", error.response?.data || error.message);
    throw error;
  }
};

export const addUserAddress = async (userId, addressData, token) => {
  try {
    const response = await axios.post(CREATE_USER_ADDRESS(userId), addressData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding address:", error.response?.data || error.message);
    throw error;
  }
};

export const updateUserAddress = async (userId, addressId, addressData, token) => {
  try {
    const response = await axios.put(UPDATE_USER_ADDRESS(userId, addressId), addressData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating address:", error.response?.data || error.message);
    throw error;
  }
};

export const deleteUserAddress = async (userId, addressId, token) => {
  try {
    const response = await axios.delete(DELETE_USER_ADDRESS(userId, addressId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting address:", error.response?.data || error.message);
    throw error;
  }
};

export const updateUserPassword = async (userId, passwordData, token) => {
  try {
    const response = await axios.put(UPDATE_USER_PASSWORD(userId, 'password'), passwordData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating password:", error.response?.data || error.message);
    throw error;
  }
};


export const getUserById = async (id,token) => {
  try {
    console.log(token)
    const response = await axios.get(GET_USER_BY_ID(id),{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error.response?.data || error.message);
    throw error;
  }
};


export const resetUserPassword = async (resetPasswordData) => {
  try {
    const response = await axios.post(FORGOT_PASSWORD, resetPasswordData);
    console.log("Password reset response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error.response?.data || error.message);
    throw error;
  }
};




