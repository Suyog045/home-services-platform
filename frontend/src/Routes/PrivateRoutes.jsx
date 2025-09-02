import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthContext";
import { useAuthModal } from "../hooks/useAuthModal";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const { openModal, setModalType } = useAuthModal();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
        navigate("/");
      setModalType("Login");
      openModal();
    }
  }, [user, openModal, setModalType, navigate]);

  return user ? children : null;
};

export default PrivateRoute;
