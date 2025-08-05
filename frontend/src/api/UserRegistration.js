import axios from "axios";
import { toast } from "react-toastify";
import { REGISTER_USER } from "./config";
 

const userRegistration = async (userData, closeModal, loginFn) => {
  try {
    const response = await axios.post(REGISTER_USER, userData);
    console.log("Registration successful:", response.data);
    toast.success("User registered successfully!");

    closeModal();
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    toast.error("Registration failed. Please try again.");
  }
};

export default userRegistration;
