import React, { useState } from "react";
import { registerPartner } from "../../api/Partner";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function PartnerRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "", 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return; 
    }

    setIsSubmitting(true); 

    try {
     
      const { confirmPassword, ...payload } = formData; 

      const response = await registerPartner(payload); 
      toast.success("Partner registered successfully! Please log in.");
      console.log("Registered Partner:", response);
      
     
      navigate("/partner"); 
      
    } catch (error) {
      
      if (error.response && error.response.data.message.includes("already exists")) {
          toast.error("A user with this email or phone number already exists.");
      } else {
          toast.error("Partner registration failed. Please try again.");
      }
      console.log(error);
    } finally {
      setIsSubmitting(false); 
    }
  };

  const inputClass =
    "border px-3 py-2 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400";

  return (
    <div className="min-h-screen bg-[#061b3a] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-yellow-600 mb-6">
          Partner Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={inputClass}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className={inputClass}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={inputClass}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={inputClass}
            required
          />
          
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

       
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/partner"
              className="font-medium text-yellow-600 hover:text-yellow-700"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}