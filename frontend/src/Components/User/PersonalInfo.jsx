import React, { useEffect, useState } from "react";
import profileImg from "../../../public/images/profile.png"; // adjust path if needed
import { Button } from "flowbite-react";
import axios from "axios";
import { useAuth } from "../../Providers/AuthContext";
import { UPDATE_USER } from "../../api/config";
import { toast } from "react-toastify";

const PersonalInfo = () => {
  const { user, login } = useAuth();
  console.log(user);
  const [formData, setFormData] = useState({ ...user });
  const [editable, setEditable] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleEditButton = () => {
    setEditable((prev) => !prev);
    if (!editable) {
      // Reset to latest user info on cancel
      setFormData({ ...user });
    }
  };

 const handleUpdateButton = async () => {
  if (!user?.id) {
    toast.error("User ID is missing. Please re-login.");
    return;
  }

  setIsUpdating(true);
  try {
    const { firstName, lastName, email, phone } = formData;
    const userPayload = { firstName, lastName, email, phone };

    const response = await axios.put(UPDATE_USER(user.id), userPayload);

    login({ ...user, ...response.data });
    setFormData(response.data);
    setEditable(false);
    toast.success("Profile updated successfully");
  } catch (error) {
    console.error("Update failed", error);
    toast.error("Update failed");
  } finally {
    setIsUpdating(false);
  }
};

      

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-3/5">
      <h2 className="text-lg font-semibold mb-6">Personal Information</h2>

      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 flex-grow">
          <input
            type="text"
            value={formData.firstName}
            readOnly={!editable}
            name="firstName"
            placeholder="First Name"
            onChange={(e) => handleChange(e)}
            className="p-2 border border-gray-200 rounded shadow-sm bg-gray-100"
          />
          <input
            type="text"
            value={formData.lastName}
            readOnly={!editable}
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => handleChange(e)}
            className="p-2 border border-gray-200 rounded shadow-sm bg-gray-100"
          />
          <input
            type="email"
            value={formData.email}
            readOnly={!editable}
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
            className="p-2 border border-gray-200 rounded shadow-sm bg-gray-100"
          />
          <input
            type="tel"
            value={formData.phone}
            readOnly={!editable}
            name="phone"
            placeholder="Phone"
            onChange={(e) => handleChange(e)}
            className="p-2 border border-gray-200 rounded shadow-sm bg-gray-100"
          />
         
        </div>
      </div>

      {/* Update Button */}
      <div className="col-span-2 mt-6 flex justify-end">
        <div className="mt-6 flex justify-end mr-2">
          <Button
            className={`${
              editable
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white px-6 py-2 rounded-4xl  transition cursor-pointer`}
            onClick={handleEditButton}
          >
            {editable ? "Cancel" : "Edit"}
          </Button>
        </div>

        {editable && (
          <div className="mt-6 flex justify-end">
            <button
              disabled={isUpdating}
              className={`${
                isUpdating
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-secondary hover:bg-yellow-600"
              } text-white px-6 py-2 rounded-4xl transition cursor-pointer`}
              onClick={handleUpdateButton}
            >
              {isUpdating ? "Updating..." : "Update"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
