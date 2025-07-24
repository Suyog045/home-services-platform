import React, { useState } from "react";

const steps = [
  "Personal Details",
  "Address Details",
  "Professional Details and ID",
  "Bank & Payment Details",
  "Review & Submit"
];

export default function PartnerRegistration() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePhoto: null,
    house: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    serviceableAreas: "",
    category: "",
    experience: "",
    languages: "",
    idType: "",
    idNumber: "",
    idUpload: null,
    accountHolder: "",
    bankName: "",
    accountNumber: "",
    ifsc: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-[#061b3a] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-yellow-600 mb-6">
          Partner Registration
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
          <div
            className="bg-yellow-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-center text-sm text-gray-700 mb-6">
          Step {step + 1} of {steps.length} - {steps[step]}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="input" />
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="input" />
              <select name="gender" value={formData.gender} onChange={handleChange} className="input">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input" />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="input" />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="input" />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="input" />
              <input type="file" name="profilePhoto" onChange={handleChange} className="input" />
            </div>
          )}

          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="house" placeholder="House/Flat No., Street Name" value={formData.house} onChange={handleChange} className="input" />
              <input type="text" name="area" placeholder="Area/Locality" value={formData.area} onChange={handleChange} className="input" />
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="input" />
              <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="input" />
              <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className="input" />
              <textarea name="serviceableAreas" placeholder="Serviceable Pincodes/Areas (comma-separated)" value={formData.serviceableAreas} onChange={handleChange} className="input" />
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="category" placeholder="Category of Service" value={formData.category} onChange={handleChange} className="input" />
              <input type="text" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} className="input" />
              <input type="text" name="languages" placeholder="Languages Known" value={formData.languages} onChange={handleChange} className="input" />
              <select name="idType" value={formData.idType} onChange={handleChange} className="input">
                <option value="">Select ID Type</option>
                <option value="Aadhar">Aadhar Card</option>
                <option value="PAN">PAN Card</option>
              </select>
              <input type="text" name="idNumber" placeholder="ID Number" value={formData.idNumber} onChange={handleChange} className="input" />
              <input type="file" name="idUpload" onChange={handleChange} className="input" />
            </div>
          )}

          {step === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="accountHolder" placeholder="Account Holder Name" value={formData.accountHolder} onChange={handleChange} className="input" />
              <input type="text" name="bankName" placeholder="Bank Name" value={formData.bankName} onChange={handleChange} className="input" />
              <input type="text" name="accountNumber" placeholder="Account Number" value={formData.accountNumber} onChange={handleChange} className="input" />
              <input type="text" name="ifsc" placeholder="IFSC Code" value={formData.ifsc} onChange={handleChange} className="input" />
            </div>
          )}

          {step === 4 && (
            <div className="text-sm text-gray-800 space-y-2">
              <h3 className="font-semibold">Review Your Details:</h3>
              <pre className="bg-gray-100 p-4 rounded max-h-64 overflow-auto">
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>
          )}

          <div className="flex justify-between mt-6">
            <button type="button" onClick={handleBack} disabled={step === 0} className={`px-6 py-2 rounded-lg border ${step === 0 ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200"}`}>
              Back
            </button>

            {step === steps.length - 1 ? (
              <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg">
                Submit Application
              </button>
            ) : (
              <button type="button" onClick={handleNext} className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg">
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
