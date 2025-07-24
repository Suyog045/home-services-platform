import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function PartnerLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  const hideNavbarOn = ["/partner/dashboard"]; 
  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a1a36]">
      {!shouldHideNavbar && (
        <nav className="bg-white rounded-3xl mx-4 mt-4 shadow-2xl flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl text-black font-bold">
              Home<span className="text-secondary font-bold">Mate</span>
            </span>
            <span className="text-secondary font-se text-lg">Partner</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-lg bg-white text-primary font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Book a Service
            </button>
            <button
              onClick={() => navigate("/partner/login")}
              className="px-4 py-2 rounded-lg bg-secondary text-white font-semibold hover:bg-primary transition-colors duration-200"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/partner/register")}
              className="px-4 py-2 rounded-lg bg-secondary text-white font-semibold hover:bg-primary transition-colors duration-200"
            >
              Register
            </button>
          </div>
        </nav>
      )}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
