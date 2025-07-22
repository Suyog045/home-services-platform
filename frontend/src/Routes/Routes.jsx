import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../Layout/RootLayout'
import Home from '../pages/Home'
import Services from '../pages/Services'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import CleaningServicePage from '../pages/ServicePages/CleaningServicePage'

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
                element:<CleaningServicePage/>
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
