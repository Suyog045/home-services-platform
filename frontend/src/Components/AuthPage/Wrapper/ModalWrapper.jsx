import React, { useState } from "react";
import { useAuthModal } from "../../../Providers/AuthModalProvider";
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
