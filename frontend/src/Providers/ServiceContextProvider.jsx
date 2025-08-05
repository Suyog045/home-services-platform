import React, { createContext, useState } from "react";

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(null);

  const addService = (service) => {
    setSelectedService(service);
  };

  return (
    <ServiceContext.Provider value={{ selectedService, addService }}>
      {children}
    </ServiceContext.Provider>
  );
};
