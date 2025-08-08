import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const ServiceListingHeader = ({ serviceType }) => {
  const serviceListings = {
    "cleaning-services": "Cleaning Services",
    "electrical-services": "Electrical Services",
    "carpentry-services": "Carpentry Services",
    "appliance-repair-and-installation": "Appliance Repair And Installation",
    "home-renovation-&-maintenance": "Home Renovation & Maintenance",
    "pest-control": "Pest Control",
    "home-security-services": "Home Security Services",
    "safety-&-compliance": "Safety And Compliance",
    "home-improvement-services": "Home Improvement Services",
    "miscellaneous-services": "Miscellaneous-services",
  };

  const title = serviceListings[serviceType];
  return (
    <div className="flex flex-col md:flex-row w-full mt-20 bg-white rounded-lg overflow-hidden justify-around items-center ">
      <div className="md:w-1/2 p-10 flex text-wrap flex-col justify-center items-center bg-white">
        <h1 className="text-3xl md:text-6xl flex flex-wrap font-bold text-primary mb-4 break-words">
          {title}
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Subsidized housing programs, government schemes, and co-operative
          housing societies often provide more affordable options
        </p>
      </div>
    </div>
  );
};

export default ServiceListingHeader;
