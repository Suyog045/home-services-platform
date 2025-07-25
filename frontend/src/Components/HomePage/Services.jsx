import React, { useEffect, useState } from "react";
import ServiceCard from "./Cards/ServiceCard";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { fetchServices } from "../../api/Services";
import { AiOutlineCaretRight } from "react-icons/ai";
import {
  MdCleaningServices,
  MdDesignServices,
  MdElectricalServices,
  MdOutlineMiscellaneousServices,
  MdPestControl,
} from "react-icons/md";
import { GrCompliance, GrShieldSecurity, GrUpgrade } from "react-icons/gr";
import { GiAutoRepair } from "react-icons/gi";
import { SiRenovate } from "react-icons/si";

const Services = () => {
  const [services, setServices] = useState([]);

  const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");

  const serviceIcon = {
    "Cleaning Services": <MdCleaningServices className="text-5xl" />,
    "Electrical Services": <MdElectricalServices className="text-5xl" />,
    "Carpentry Services": <MdDesignServices className="text-5xl" />,
    "Appliance Repair and Installation": <GiAutoRepair className="text-5xl" />,
    "Home Renovation & Maintenance": <SiRenovate className="text-5xl" />,
    "Pest Control": <MdPestControl className="text-5xl" />,
    "Home Security Services": <GrShieldSecurity className="text-5xl" />,
    "Safety & Compliance": <GrCompliance className="text-5xl" />,
    "Home Improvement Services": <GrUpgrade className="text-5xl" />,
    "Miscellaneous Services": (
      <MdOutlineMiscellaneousServices className="text-5xl" />
    ),
  };

  useEffect(() => {
    const loadServices = async () => {
      const data = await fetchServices();
      setServices(data);
    };

    loadServices();
  }, []);

  return (
    <div className="mt-10 md:ml-30 md:mr-30 flex flex-col justify-around items-center overflow-hidden">
      <div className="flex flex-col gap-2 md:justify-center items-start w-full">
        <div className="mb-2 flex flex-col md:items-start items-start ">
          <h2 className="md:text-wrap text-nowrap text-black text-3xl font-semibold mb-2 md:text-left text-center">
            Cleaning
          </h2>
          <div className="w-12 h-1 bg-secondary rounded-3xl" />
        </div>
      </div>
        <div className="mt-2 flex overflow-x-auto no-scrollbar whitespace-nowrap w-full py-5 mx-5 gap-4">
          {services.map((service, index) => (
            <Link to={`/services/${slugify(service.category)}`}>
                <div key={index} className="min-w-[250px]">
                <ServiceCard
                    category={service.category}
                    serviceIcon={serviceIcon[service.category]}
                />
                </div>
                <div className="text-center break-words text-wrap">
                    <p>{service.category}</p>
                </div>
            </Link>
          ))}
        </div>
      <div className="mt-5 md:hidden">
        <Link to={"services"}>
          <Button className="bg-secondary rounded-4xl hover:bg-secondary cursor-pointer text-nowrap transition-all duration-300 hover:scale-105 gap-1 hover:gap-2 ">
            Explore More <span className="text-2xl">&#8594;</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
