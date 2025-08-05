import React from 'react';

const ChangePassword = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-6 text-center sm:text-left">Change Password</h2>

      <div className="grid grid-cols-1 gap-4">
        <input
          type="password"
          placeholder="New Password"
          className="p-2 border border-gray-200 rounded shadow-sm w-full"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-2 border border-gray-200 rounded shadow-sm w-full"
        />
      </div>

      {/* Update Button */}
      <div className="mt-6 flex ">
        <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
