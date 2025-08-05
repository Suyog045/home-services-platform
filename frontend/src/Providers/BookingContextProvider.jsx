import React, { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState({
    serviceIds: [],
    serviceDate: '',
    serviceTime: '',
    address: null,
  });

  const addServiceId = (id) => {
    setBookingDetails((prev) => ({
      ...prev,
      serviceIds: prev.serviceIds.includes(id) ? prev.serviceIds : [...prev.serviceIds, id],
    }));
  };

  const setServiceDate = (date) => {
  setBookingDetails((prev) => ({ ...prev, serviceDate: date }));
};

const setServiceTime = (time) => {
  setBookingDetails((prev) => ({ ...prev, serviceTime: time }));
};

const setAddress = (address) => {
  setBookingDetails((prev) => ({ ...prev, address: address }));
};
const clearCart = () => {
  setBookingDetails({
    serviceIds: [],
    serviceDate: '',
    serviceTime: '',
    address: null,
  });
};

const removeService = (id) => {
  setBookingDetails((prev) => ({
    ...prev,
    serviceIds: prev.serviceIds.filter((sid) => sid !== id),
  }));
};

  return (
    <BookingContext.Provider value={{ bookingDetails,
        addServiceId,setServiceDate,setServiceTime,setAddress,removeService,clearCart }}>
      {children}
    </BookingContext.Provider>
  );
};
