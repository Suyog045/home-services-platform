import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthModal } from "../hooks/useAuthModal";
import { usePartnerAuth } from "../providers/PartnerAuthContext";

const ProtectedPartnerRoutes = ({ children }) => {
  const { partner } = usePartnerAuth();
  const { openModal, setModalType } = useAuthModal();
  const navigate = useNavigate();

  useEffect(() => {
    if (!partner) {
        navigate("/partner");
        setModalType("Login");
        openModal();
    }
  }, [partner, openModal, setModalType, navigate]);

  return partner ? children : null;
};

export default ProtectedPartnerRoutes;
