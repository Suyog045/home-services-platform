// src/pages/ResetPassword.jsx
import React, { use, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";
import { toast } from "react-toastify";
import axios from "axios";



const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Token is missing or invalid");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:8080/auth/reset-password", {
        token,
        newPassword,
        confirmPassword,
      });
      toast.success("Password reset successfully");
      navigate("/");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Failed to reset password"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  const checkToken = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/auth/validate-token?token=${token}`);
      console.log("Token validation response:", response.data);
    } catch (error) {
      console.error("Token validation failed:", error);
      toast.error(error?.response?.data?.message || "Invalid or expired token");
        navigate("/");
    }
  };

  if (token) {
    checkToken();
  } else {
    toast.error("Missing token");
    navigate("/login");
  }
}, [token]);



  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Reset Password
        </h2>
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <Label htmlFor="newPassword" value="New Password" />
            <TextInput
              id="newPassword"
              type="password"
              placeholder="Enter new password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword" value="Confirm Password" />
            <TextInput
              id="confirmPassword"
              type="password"
                placeholder="Confirm new password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-secondary hover:bg-secondary"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
