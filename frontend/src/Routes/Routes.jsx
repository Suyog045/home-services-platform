import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Correct import paths
import RootLayout from '../Layout/RootLayout';
import Home from '../pages/Home';
import Services from '../pages/Services';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import ServiceListingPage from '../pages/ServicePages/ServiceListingPage';
import UserProfileLayout from '../pages/User/UserProfileLayout';

import PersonalInfo from '../Components/User/PersonalInfo';
import Bookings from '../Components/User/Bookings';
import Addresses from '../Components/User/Addresses';
import ChangePassword from '../Components/User/ChangePassword';


const Routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', 
        element: <Home /> },
      { path: '/services', 
        element: <Services /> },
      { path: '/services/cleaning-services', 
        element: <ServiceListingPage /> },
      { path: '/about-us', 
        element: <AboutUs /> },
      { path: '/contact-us', 
        element: <ContactUs /> },
      {
        path: '/user-profile',
        element: <UserProfileLayout />,
        children: [
          { index: true, 
            element: <PersonalInfo /> },
          { path: 'mybookings', 
            element: <Bookings /> },
          { path: 'myaddresses', 
            element: <Addresses /> },
          { path: 'change-password', 
            element: <ChangePassword /> },
        ],
      },
    ],
  },
]);

export default Routes;
