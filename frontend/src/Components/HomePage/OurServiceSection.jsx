import React, { useEffect, useState } from "react";
import ServiceCard from "./Cards/CategoryCard";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineCaretRight } from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi";
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
import CategoryCard from "./Cards/CategoryCard";
import { getAllCategories } from "../../api/CatalogService";

const OurServiceSection = () => {
  const [services, setServices] = useState([]);
  
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
      const data = await getAllCategories();
      setServices(data);
    };

    loadServices();
  }, []);

  return (
    <div className="mt-10 md:ml-30 md:mr-30 flex flex-col justify-around items-center overflow-hidden">
      <div className="flex flex-col gap-2 text-center md:justify-center items-center">
        <h3 className="text-primary text-center font-semibold">Our Services</h3>
        <div className="mb-2 flex flex-col md:items-start items-center ">
          <h2 className="md:text-wrap text-nowrap text-black text-3xl font-semibold mb-3 md:text-left text-center">
            What Services We Provide ?
          </h2>
          <div className="w-24 h-1 bg-secondary rounded-3xl" />
        </div>
      </div>
        <div className="mt-5 flex overflow-x-auto no-scrollbar whitespace-nowrap w-full py-5 mx-5">
          {services.map((service, index) => (
            <Link to={`/services/${service.id}`}>
            <div key={index} className="min-w-[250px]">
              <CategoryCard
                category={service.name}
                serviceIcon={serviceIcon[service.name]}
              />
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

export default OurServiceSection;
