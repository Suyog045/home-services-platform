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
    <div className="flex flex-col md:flex-row w-full h-150 bg-white rounded-lg overflow-hidden justify-around items-center ">
      <div className="md:w-1/2 p-10 flex text-wrap flex-col justify-center items-start bg-white">
        <h1 className="text-3xl md:text-6xl flex flex-wrap font-bold text-primary mb-4 break-words">
          {title}
        </h1>
        <p className="text-gray-600 mb-6">
          Subsidized housing programs, government schemes, and co-operative
          housing societies often provide more affordable options
        </p>
        <Link to={`/services/${serviceType}`}>
          <Button className="bg-secondary rounded-4xl hover:bg-secondary cursor-pointer text-nowrap text-md flex items-center justify-between gap-1 hover:gap-2 transition-all duration-300 hover:scale-105">
            Get Your Work Done <span className="text-2xl">&#8594;</span>
          </Button>
        </Link>
      </div>

      <div className="h-full w-1/3 flex justify=center items-center">
        <div className="h-120 w-full bg-primary rounded-[100px] flex justify-center items-center mt-14">
          <img
            src="/images/cleaning-servicebg.png"
            alt="Cleaning Service"
            className="w-full h-full object-cover mr-54 rounded-tl-[100px] rounded-bl-[100px]"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ServiceListingHeader;
