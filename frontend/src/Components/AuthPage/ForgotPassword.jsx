// src/pages/ForgotPassword.jsx
import React, { Fragment, useState } from "react";
import { Label, TextInput, Button, HelperText } from "flowbite-react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:8080/auth/forgot-password", { email });
      toast.success("Password reset link sent to your email");
      setEmailSent(true);
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message || "Failed to send reset email"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        {emailSent ? (
          <div className="text-green-600 text-center text-sm">
            ✅ A password reset link has been sent to <b>{email}</b>. Please
            check your inbox.
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">
              Forgot Password
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" value="Enter your email address" />
                <TextInput
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched(true)}
                  required
                />
                {touched && !isValidEmail(email) && (
                  <HelperText>
                    <p className="text-red-600 text-sm mt-1">
                      Please enter a valid email
                    </p>
                  </HelperText>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
