import { createContext, useContext, useState } from "react";

const PartnerAuthContext = createContext();

export const PartnerAuthProvider = ({ children }) => {
  const [partner, setPartner] = useState(() => {
    try {
      const stored = localStorage.getItem("partner");
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      localStorage.removeItem("partner");
      return null;
    }
  });

  const login = (partnerData) => {
    setPartner(partnerData);
    localStorage.setItem("partner", JSON.stringify(partnerData));
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
