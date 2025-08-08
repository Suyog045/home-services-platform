import React, { useState } from "react";
import { useAuth } from "../../Providers/AuthContext";
import { updateUserPassword } from "../../api/User";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const { user } = useAuth();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      console.error("Passwords do not match");
      toast.warn("Passwords do not match");
      return;
    }
    try {
      await updateUserPassword(user.id, { password: newPassword },user?.token);
      toast.success("Password updated successfully!");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("Error updating password. Please try again.");
    }
  };
  return (
    <div className="bg-white p-4 sm:p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-6 text-center sm:text-left">
        Change Password
      </h2>

      <div className="grid grid-cols-1 gap-4">
        <input
          type="password"
          placeholder="New Password"
          className="p-2 border border-gray-200 rounded shadow-sm w-full"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-2 border border-gray-200 rounded shadow-sm w-full"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {/* Update Button */}
      <div className="mt-6 flex ">
        <button
          onClick={handleChangePassword}
          className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition"
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
