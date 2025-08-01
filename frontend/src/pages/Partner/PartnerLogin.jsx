import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { auth } from "../../services/firebase-config"; // Adjust path if needed
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

export default function PartnerLoginPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const isPhoneValid = /^\d{10}$/.test(phone);

  const configureCaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("reCAPTCHA solved");
          },
        },
        auth
      );
    }
  };

  const sendOtp = async (e) => {
    e.preventDefault();

    try {
      configureCaptcha();

      const appVerifier = window.recaptchaVerifier;

      const confirmation = await signInWithPhoneNumber(
        auth,
        "+91" + phone,
        appVerifier
      );

      setConfirmationResult(confirmation);
      setStep(2);
    } catch (err) {
      console.error("OTP send error:", err);
      alert("Failed to send OTP: " + err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();

    try {
      await confirmationResult.confirm(otp);
      const token = await auth.currentUser.getIdToken();

      alert("Login successful!");
      navigate("/partner/dashboard");
    } catch (err) {
      alert("Invalid OTP: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#061b3a] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-[#061b3a] mb-6">
          Partner Login via OTP
        </h2>

        {step === 1 && (
          <form onSubmit={sendOtp}>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter 10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
              {!isPhoneValid && phone && (
                <p className="text-red-500 text-sm mt-1">
                  Enter a valid 10-digit phone number
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={!isPhoneValid}
              className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600"
            >
              Send OTP
            </Button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={verifyOtp}>
            <div className="mb-4">
              <label htmlFor="otp" className="block text-gray-700 font-semibold mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600"
            >
              Verify OTP
            </Button>
          </form>
        )}

        <div id="recaptcha-container"></div>

        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-blue-600 hover:underline cursor-pointer"
          >
            Login as User
          </button>
        </div>
      </div>
    </div>
  );
}
