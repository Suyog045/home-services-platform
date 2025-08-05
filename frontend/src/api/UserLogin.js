import axios from "axios";
import { toast } from "react-toastify";
import { LOGIN_USER } from "./config";

const userLogin = async (credentials, closeModal, loginFn) => {
  try {
    const response = await axios.post(LOGIN_USER, credentials);
    loginFn(response.data); // set user in context
    toast.success("Login successful!");
    closeModal();
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    toast.error("Invalid email or password");
  }
};

export default userLogin;
