import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  createTheme,
  HelperText,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import { useAuthModal } from "../../hooks/useAuthModal";
import { useAuth } from "../../Providers/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import { userLogin } from "../../api/User";
import { usePartnerAuth } from "../../Providers/PartnerAuthContext";

const customTheme = createTheme({
  root: {
    base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    show: {
      on: "flex bg-gray-900/30",
      off: "hidden",
    },
    sizes: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
    },
    positions: {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      center: "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start",
    },
  },
  content: {
    base: "relative h-full w-full p-4 md:h-auto",
    inner: "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow",
  },
  body: {
    base: "flex-1 overflow-auto p-6",
    popup: "pt-0",
  },
  header: {
    base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
    popup: "border-b-0 p-2",
    title: "text-3xl font-medium ml-32 md:ml-40 text-primary text-center",
    close: {
      base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-secondary hover:text-white cursor-pointer",
      icon: "h-5 w-5",
    },
  },
  footer: {
    base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
    popup: "border-t",
  },
});
const UserLogin = () => {
  const { isModalOpen, closeModal, modalType, setModalType } = useAuthModal();
  const { login } = useAuth();
  const {login: partnerLogin} = usePartnerAuth()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [disableRegister, setDisableRegister] = useState(true);

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const validateEmail = (e) => {
    const regex = /^\S+@\S+\.\S+$/;
    setIsEmailValid(regex.test(e.target.value));
  };

  const handleLogin = async () => {
    try {
      const res = await userLogin({ email, password });
      console.log("Login response:", res);
      if (res?.role === "USER" || res?.entityType === "USER") {
      login(res);
      toast.success("Login successful!");
      closeModal();
    } else if (res?.role === "PARTNER" || res?.entityType === "PARTNER") {
      partnerLogin(res);
      toast.success("Partner login successful!");
      closeModal();
    } else {
      toast.error("Unrecognized role. Access denied.");
    }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  useEffect(() => {
    if (isEmailValid && password) {
      setDisableRegister(false);
    }
  }, [isEmailValid, password]);
  return (
    <>
      <Modal
        dismissible
        show={isModalOpen}
        onClose={closeModal}
        size="md"
        popup
        theme={customTheme}
      >
        <ModalHeader>{modalType}</ModalHeader>
        <ModalBody>
          <div className="space-y-6 mt-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">Your email</Label>
              </div>
              <TextInput
                id="email"
                placeholder="xyz@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e);
                }}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                color={touched.email && !email ? "failure" : undefined}
                required
              />
              {touched.email && (!email || !isEmailValid) && (
                <HelperText>
                  <p className="text-red-600 text-sm mt-1">
                    Enter a valid Email
                  </p>
                </HelperText>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password">Your password</Label>
              </div>
              <TextInput
                name="password"
                value={password}
                id="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, password: true }))
                }
                color={touched.password && !password ? "failure" : undefined}
                autoComplete="off"
                required
              />
              {touched.password && !password && (
                <HelperText>
                  <p className="text-red-600 text-sm mt-1">Password Required</p>
                </HelperText>
              )}
            </div>
            <div className="flex justify-between">
              <a
                href="#"
                className="text-sm text-primary hover:underline dark:text-primary"
              >
                Forgot Password?
              </a>
            </div>
            <div className="w-full flex justify-center">
              <Button
                disabled={disableRegister}
                onClick={handleLogin}
                className="cursor-pointer bg-secondary hover:bg-secondary"
              >
                Log in to your account
              </Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <p
                onClick={() => setModalType("Register")}
                className="text-primary hover:underline dark:text-primary cursor-pointer"
              >
                Create account
              </p>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserLogin;
