import axios from "axios";
import { GET_ALL_CATEGORIES, GET_SERVICES_BY_CATEGORY_ID } from "./config";


export const getAllCategories = async () => {
  try {
    const response = await axios.get(GET_ALL_CATEGORIES);
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error("Internal Server Error")
  }
};

export const getServicesByCategoryId = async(id)=>{
  try {
    const url = GET_SERVICES_BY_CATEGORY_ID(id)
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error("Internal Server Error");
  }
}
