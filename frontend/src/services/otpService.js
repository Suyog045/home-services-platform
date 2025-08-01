import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase-config";

// Send OTP
export const sendOtp = async (phone) => {
  window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
    size: "invisible",
    callback: (response) => {
      console.log("reCAPTCHA resolved");
    },
  }, auth);

  const confirmation = await signInWithPhoneNumber(auth, "+91" + phone, window.recaptchaVerifier);
  return confirmation;
};

// Verify OTP
export const verifyOtp = async (confirmationResult, otp) => {
  await confirmationResult.confirm(otp);
  const firebaseIdToken = await auth.currentUser.getIdToken();
  return firebaseIdToken;
};
