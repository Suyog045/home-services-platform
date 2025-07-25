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
                path:"/services/:serviceType",
                element:<ServiceListingPage/>
            },
            {
                path:"/services/:serviceType/book-appointment/:id",
                element:<ScheduleVisitPage/>
            },
            {
                path:"/services/:serviceType/book-appointment/:id/add-address",
                element:<AddressFormPage/>
            },
            {
                path:"/services/:serviceType/book-appointment/:id/add-address/checkout",
                element:<CheckoutPage/>
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
    }
])

export default Routes;
