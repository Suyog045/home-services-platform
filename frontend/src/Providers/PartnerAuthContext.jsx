import { createContext, useContext, useState, useEffect } from "react";

export const PartnerAuthContext = createContext();

export const PartnerAuthProvider = ({ children }) => {
  const [partner, setPartner] = useState(() => {
    const stored = localStorage.getItem("partner");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (data) => {
    setPartner(data);
    localStorage.setItem("partner", JSON.stringify(data));
  };

  const logout = () => {
    setPartner(null);
    localStorage.removeItem("partner");
  };

  return (
    <PartnerAuthContext.Provider value={{ partner, login, logout }}>
      {children}
    </PartnerAuthContext.Provider>
  );
};

export const usePartnerAuth = () => useContext(PartnerAuthContext);
