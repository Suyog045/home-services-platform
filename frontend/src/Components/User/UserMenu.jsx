
import React from 'react';
import { NavLink } from 'react-router-dom';
const UserMenu = ({userDetails}) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-6">Welcome! {userDetails.firstName}</h2>
      <ul className="space-y-2">
        <li>
          <NavLink 
            to=""
            end
            className={({ isActive }) =>
              `block px-3 py-2 rounded cursor-pointer ${
                isActive ? 'bg-secondary text-white' : 'hover:bg-primary'
              }`
            }>
            Personal Information
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="myorders"
            className={({ isActive }) =>
              `block px-3 py-2 rounded cursor-pointer ${
                isActive ? 'bg-secondary text-white' : 'hover:bg-primary'
              }`
            }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="myaddresses"
            className={({ isActive }) =>
              `block px-3 py-2 rounded cursor-pointer ${
                isActive ? 'bg-secondary text-white' : 'hover:bg-primary'
              }`
            }>
            My Addresses
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="change-password"
            className={({ isActive }) =>
              `block px-3 py-2 rounded cursor-pointer ${
                isActive ? 'bg-secondary text-white' : 'hover:bg-primary'
              }`
            }>
            Change Password
          </NavLink>
        </li>
        <li>
          
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
