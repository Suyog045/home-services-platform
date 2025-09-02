import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import CheckoutPage from "../pages/ServicePages/CheckoutPage/CheckoutPage";
import UserProfileLayout from "../pages/User/UserProfileLayout";
import PersonalInfo from "../Components/User/PersonalInfo";
import Orders from "../components/User/Bookings";
import ChangePassword from "../Components/User/ChangePassword";
import PartnerLogin from "../pages/Partner/PartnerLogin";
import PartnerRegister from "../pages/Partner/PartnerRegister";
import PartnerDashboard from "../components/Partner/PartnerDashBoard";
import PartnerUpdateForm from "../components/Partner/PartnerUpdateForm";

// import { PartnerHome } from "../pages/Partner/PartnerHome";
import ResetPassword from "../components/AuthPage/ResetPassword";
import MyAddresses from "../components/User/Addresses";
import ForgotPassword from "../components/AuthPage/ForgotPassword";
import PartnerHome from "../pages/Partner/PartnerHome";
import ServiceListings from "../components/Services/ServiceListings";
import BookingConfirmation from "../components/Services/Booking/BookingConfirmation";
import PrivateRoute from "./PrivateRoutes";
import ProtectedPartnerRoutes from "./ProtectedPartnerRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },

      {
        path: "/services",
        element: <Services />,
        children: [
          {
            index: true,
            element: <ServiceListings />,
          },
          {
            path: ":categoryId",
            element: <ServiceListings />,
          },
        ],
      },
      {
        path: "/services/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/services/booking-success",
        element: <BookingConfirmation />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoute>
            <UserProfileLayout />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <PersonalInfo />,
          },
          {
            path: "mybookings",
            element: <Orders />,
          },
          {
            path: "myaddresses",
            element: <MyAddresses />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
        ],
      },
      {
        path: "/partner",
        element: <PartnerHome />,
      },
    ],
  },
  {
    path: "/partner/dashboard",
    element: (
      <ProtectedPartnerRoutes>
        <PartnerDashboard />
      </ProtectedPartnerRoutes>
    ),
  },
  {
  path: "/partner/update",
  element: (
    <ProtectedPartnerRoutes>
      <PartnerUpdateForm />
    </ProtectedPartnerRoutes>
  ),
}
, 
  {
    path: "/partner/register",
    element: <PartnerRegister />,
  },
]);

export default Routes;
