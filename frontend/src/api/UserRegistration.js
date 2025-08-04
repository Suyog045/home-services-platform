import axios from "axios";
import { toast } from "react-toastify";

const userRegistration = async() => {
  try {
    const response = await axios.post("http://localhost:8080/api/users/register", userData);
    console.log("Registration successful:", response.data);
    toast.success("User registered successfully!");
    closeModal(); // Optional: close modal after success
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    toast.error("Registration failed. Please try again.");
  }
};

export default userRegistration;