import React from "react";
import { useAuthModal } from "../../../hooks/useAuthModal";
import UserLogin from "../UserLogin";
import UserRegister from "../UserRegister";

export const ModalWrapper = () => {
  const { modalType } = useAuthModal();

  return (
    <>
      {modalType === "Login" && <UserLogin />}
      {modalType === "Register" && <UserRegister />}
    </>
  );
};
