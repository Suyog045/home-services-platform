import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../Layout/RootLayout'
import Home from '../pages/Home'
import Services from '../pages/Services'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import ServiceListingPage from '../pages/ServicePages/ServiceListingPage'
import PartnerDashBoard from '../pages/Partner/PartnerDashBoard'
import PartnerLayout from '../Layout/PartnerLayout'
import PartnerLogin from '../pages/Partner/PartnerLogin'
import PartnerRegister from '../pages/Partner/PartnerRegister'
import PartnerHome from '../pages/Partner/PartnerHome'

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
                path:"/services/cleaning-services",
                element:<ServiceListingPage/>
            },
            {
                path:"/about-us",
                element:<AboutUs/>
            },
            {
                path:"/contact-us",
                element:<ContactUs/>
            }
        ]
    },
    {
        path: "/partner",
        element: <PartnerLayout />,
        children: [
            {
                index: true,
                element: <PartnerHome />
            },
            {
                path: "dashboard",
                element: <PartnerDashBoard />
            },
            {
                path: "login",
                element: <PartnerLogin />
            },
            {
               path: "register",
               element: <PartnerRegister />
            }
        ]
    }
])

export default Routes;
