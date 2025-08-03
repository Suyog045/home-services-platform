import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../Layout/RootLayout'
import Home from '../pages/Home'
import Services from '../pages/Services'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import ServiceListingPage from '../pages/ServicePages/ServiceListingPage'
import ScheduleVisitPage from '../pages/ServicePages/ScheduleVisitPage/ScheduleVisitPage'
import AddressFormPage from '../pages/ServicePages/ScheduleVisitPage/AddressFormPage'
import CheckoutPage from '../pages/ServicePages/CheckoutPage/CheckoutPage'
import UserProfileLayout from '../pages/User/UserProfileLayout';

import PersonalInfo from '../Components/User/PersonalInfo';
import Bookings from '../Components/User/Bookings';
import Addresses from '../Components/User/Addresses';
import ChangePassword from '../Components/User/ChangePassword';
import PartnerDashBoard from '../pages/Partner/PartnerDashBoard'
import PartnerLogin from '../pages/Partner/PartnerLogin'
import PartnerRegister from '../pages/Partner/PartnerRegister'
import PartnerHome from '../pages/Partner/PartnerHome'
import MyAddresses from '../Components/User/Addresses'

const Routes = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/services",
                element:<Services/>
            },
            {
                path:"/services/add-address",
                element:<AddressFormPage/>
            },
            {
                path:"/services/checkout",
                element:<CheckoutPage/>
            },
            {
                path:"/about-us",
                element:<AboutUs/>
            },
            {
                path:"/contact-us",
                element:<ContactUs/>
            },
            {
        path: '/user-profile',
        element: <UserProfileLayout />,
        children: [
          {
            index: true,
            element: <PersonalInfo />
          },
          {
            path: 'mybookings',
            element: <Bookings />
          },
          {
            path: 'myaddresses',
            element: <MyAddresses />
          },
          {
            path: 'change-password',
            element: <ChangePassword />
          },
        ],
      },
      {
        path: "/partner",
            element: <PartnerHome />
          },
    ]
  },
      // {
      //   path: "dashboard",
      //   element: <PartnerDashBoard />
      // },
      // {
      //   path: "login",
      //   element: <PartnerLogin />
      // },
      // {
      //   path: "register",
      //   element: <PartnerRegister />
      // }
    ]
)


export default Routes;
