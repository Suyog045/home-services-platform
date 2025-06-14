export const fetchServices = async () => {
  try {
    const response = await fetch("https://dummyjson.com/c/c450-f8b8-4d2d-90e6");
    const data = await response.json();

    console.log(data.services)

    return data.services;
  } catch (error) {
    throw new Error("Internal Server Error")
  }
};
