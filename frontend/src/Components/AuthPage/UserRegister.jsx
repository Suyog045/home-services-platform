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

const customTheme = createTheme({
  root: {
    base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    show: {
      on: "flex bg-gray-900/50 dark:bg-gray-900/80",
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
    title: "text-3xl font-medium ml-28 md:ml-36 text-primary text-center",
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

const UserRegister = () => {
  const { isModalOpen, closeModal, modalType } = useAuthModal();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    contact: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [stateChange, setStateChange] = useState({
    disabled: true,
    showPassword: false,
    termsAccepted: false,
  });

  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [confirmPassword,setConfirmPassword] = useState()
  const [confirmPasswordMatch,setConfirmPasswordMatch] = useState(false)
  // const [termAndConditionAccepted,setTermsAndConditionsAccepted] = useState(false)

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (e)=>{
    const regex = /^\S+@\S+\.\S+$/
    setIsEmailValid(regex.test(e.target.value))
  }

  const validatePassword = (e)=>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setIsPasswordValid(passwordRegex.test(e.target.value))
  }

  const handleTermsAndConditions = ()=>{
    setStateChange((prev)=> ({...prev, termsAccepted:true}))
  }

  useEffect(()=>{
    if(userData.lastName && userData.lastName && isPhoneValid && isPasswordValid && isEmailValid && confirmPasswordMatch && stateChange.termsAccepted){
      setStateChange((prev)=> ({...prev,disabled:false}))
    }
  },[userData,isPhoneValid , isPasswordValid, isEmailValid, confirmPasswordMatch,stateChange.termsAccepted])
  return (
    <>
      <Modal
        theme={customTheme}
        dismissible
        show={isModalOpen}
        onClose={closeModal}
        size="md"
        popup
      >
        <ModalHeader>{modalType}</ModalHeader>
        <ModalBody>
          <div className="space-y-4 mt-4">
            <div className="flex gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="fname">First Name</Label>
                </div>
                <TextInput
                  id="fname"
                  name="firstName"
                  onChange={handleFieldChange}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, firstName: true }))
                  }
                  value={userData.firstName}
                  required
                  color={
                    touched.firstName && !userData.firstName
                      ? "failure"
                      : undefined
                  }
                  autoComplete="off"
                />
                {touched.firstName && !userData.firstName && (
                  <HelperText>
                    <p className="text-red-600 text-sm mt-1">
                      First Name is required
                    </p>
                  </HelperText>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="lname">Last Name</Label>
                </div>
                <TextInput
                  id="lname"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleFieldChange}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, lastName: true }))
                  }
                  color={
                    touched.lastName && !userData.lastName
                      ? "failure"
                      : undefined
                  }
                  autoComplete="off"
                  required
                />
                {touched.lastName && !userData.lastName && (
                  <HelperText>
                    <p className="text-red-600 text-sm mt-1">
                      Last Name is required
                    </p>
                  </HelperText>
                )}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="contact">Contact Number</Label>
              </div>
              <TextInput
                name="contact"
                value={userData.contact}
                id="contact"
                type="number"
                onChange={(e) => {
                  handleFieldChange(e);
                  setIsPhoneValid(/^[6-9]\d{9}$/.test(e.target.value));
                }}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, contact: true }))
                }
                color={
                  touched.contact && !userData.contact ? "failure" : undefined
                }
                autoComplete="off"
                required
              />
                {touched.contact && (!userData.contact || !isPhoneValid) && (
                  <HelperText>
                    <p className="text-red-600 text-sm mt-1">
                      Enter a valid contact number
                    </p>
                  </HelperText>
                )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">Your email</Label>
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                name="email"
                value={userData.email}
                onChange={(e)=>{
                  handleFieldChange(e)
                  validateEmail(e)
                }}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, email: true }))
                }
                color={
                  touched.email && !userData.email ? "failure" : undefined
                }
                autoComplete="off"
                required
              />
                {touched.email && (!userData.email || !isEmailValid) && (
                  <HelperText>
                    <p className="text-red-600 text-sm mt-1">
                      Enter a valid Email
                    </p>
                  </HelperText>
                )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password">Password</Label>
              </div>
              <TextInput
                name="password"
                value={userData.password}
                id="password"
                type="password"
                onChange={(e)=>{
                  handleFieldChange(e)
                  validatePassword(e)
                }}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, password: true }))
                }
                color={
                  touched.password && !userData.password ? "failure" : undefined
                }
                autoComplete="off"
                required
              />
              {touched.password && (!userData.password || !isPasswordValid) && (
                  <HelperText>
                    <p className="text-red-600 text-sm mt-1">
                      Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.
                    </p>
                  </HelperText>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password">Confirm Password</Label>
              </div>
              <TextInput
                name="confirmPassword"
                value={confirmPassword}
                id="confirm-password"
                type="password"
                onChange={(e)=>{
                  const value = e.target.value;
                  setConfirmPassword(value);
                  setConfirmPasswordMatch(value === userData.password);
                }}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, confirmPassword: true }))
                }
                color={
                  touched.confirmPassword && !confirmPassword ? "failure" : undefined
                }
                autoComplete="off"
                required
              />
              {touched.confirmPassword && (!confirmPassword || !confirmPasswordMatch) && (
                  <HelperText>
                    <p className="text-red-600 text-sm mt-1">
                      Password do not match
                    </p>
                  </HelperText>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" className="cursor-pointer" onClick={handleTermsAndConditions} />
              <Label htmlFor="remember">I agree terms and conditions</Label>
            </div>
            <div className="w-full flex justify-center">
              <Button
                disabled={stateChange.disabled}
                className="bg-secondary hover:bg-secondary cursor-pointer"
              >
                Register
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserRegister;
