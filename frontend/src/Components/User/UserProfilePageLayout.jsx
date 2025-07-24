// src/Components/User/UserProfilePageLayout.jsx
import React from 'react';
import UserMenu from './UserMenu';
import { Outlet } from 'react-router-dom';

const UserProfilePageLayout = () => {
  return (
    <div className="flex min-h-screen p-5 gap-4">
      <div className="w-64 bg-primary text-white mt-24 rounded-xl p-5 shadow-lg">
        <UserMenu />
      </div>
      <div className="flex-1 bg-white p-6 mt-24 rounded-xl shadow-md">
        <Outlet />
      </div>
    </div>
  );
};

export default UserProfilePageLayout;
