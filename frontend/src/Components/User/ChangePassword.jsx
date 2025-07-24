import React from 'react';

const ChangePassword = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md w-1/2">
      <h2 className="text-lg font-semibold mb-6">Change Password</h2>

      <div className="grid grid-cols-1 gap-4 max-w-md">
        <input
          type="password"
          placeholder="New Password"
          className="p-2 border border-gray-200 rounded shadow-sm"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-2 border border-gray-200 rounded shadow-sm"
        />
      </div>

      {/* Update Button */}
      <div className="mt-6 flex ">
        <button className="bg-secondary text-white px-6 py-2 rounded-4xl hover:bg-yellow-600 transition">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
