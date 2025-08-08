import { Button } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PartnerLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleLogin = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen bg-[#061b3a] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-[#061b3a] mb-6">
          Partner Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="partner@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              required
            />
            {!isEmailValid && email && (
              <p className="text-red-500 text-sm mt-1">Enter a valid email address</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              required
            />
            {password.length > 0 && password.length < 6 && (
              <p className="text-red-500 text-sm mt-1">Minimum 6 characters required</p>
            )}
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
            <span className="hover:underline cursor-pointer">
              Forgot Password?
            </span>
          </div>

          <Link to={"/partner/dashboard"}>
          <Button
            type="submit"
            disabled={!isFormValid}
            className={`w-full bg-yellow-500 text-white font-semibold py-2 rounded-md transition ${
              isFormValid
                ? "hover:bg-yellow-600 cursor-pointer"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            Login
          </Button>
          </Link>

          <p className="mt-4 text-sm text-center text-gray-600">
            Not registered?{" "}
            <span
              onClick={() => navigate("/partner/register")}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Register Now
            </span>
          </p>

          <div className="mt-4 text-center">
            <button
              onClick={() => navigate("/")}
              className="text-sm text-blue-600 hover:underline cursor-pointer"
            >
              Login as User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}