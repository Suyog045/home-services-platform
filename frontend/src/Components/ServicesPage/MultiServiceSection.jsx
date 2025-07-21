import React, { useEffect, useState } from "react";
import ServicePageCard from "./ServicePageCard";
import { fetchServices } from "../../api/Services";
import { MdCleaningServices, MdDesignServices, MdElectricalServices, MdOutlineMiscellaneousServices, MdPestControl } from "react-icons/md";
import { GrCompliance, GrShieldSecurity, GrUpgrade } from "react-icons/gr";
import { GiAutoRepair } from "react-icons/gi";
import { SiRenovate } from "react-icons/si";
import {Link} from "react-router-dom"

const MultiServiceSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-');

  const serviceIcon = 
    {"Cleaning Services":<MdCleaningServices className="text-5xl" />,"Electrical Services" : <MdElectricalServices className="text-5xl" />
      ,"Carpentry Services":<MdDesignServices className="text-5xl" />
      ,"Appliance Repair and Installation":<GiAutoRepair className="text-5xl" />
      ,"Home Renovation & Maintenance":<SiRenovate className="text-5xl" />,
      "Pest Control":<MdPestControl className="text-5xl" />,"Home Security Services":<GrShieldSecurity className="text-5xl" />
      ,"Safety & Compliance": <GrCompliance className="text-5xl" />,
      "Home Improvement Services":<GrUpgrade className="text-5xl" />
      ,"Miscellaneous Services":<MdOutlineMiscellaneousServices className="text-5xl" />};

  useEffect(() => {
    const loadServices = async () => {
      const data = await fetchServices();
      setServices(data);
      setLoading(false);
    };

    loadServices();
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 items-center mt-10">
        <div className="text-center flex flex-col justify-center items-center md:items-start gap-2">
          <h2 className="text-black text-3xl font-semibold mb-1 whitespace-normal">
            Browse By Category
          </h2>
          <div className="w-24 h-1 bg-secondary rounded-3xl" />
        </div>

        {loading ? (
          <p className="text-gray-600 mt-4">Loading services...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-4 p-4">
            {services.map((service, index) => (
              <Link to={`/services/${slugify(service.category)}`} key={index}>
                <ServicePageCard
                  category={service.category}
                  serviceIcon={serviceIcon[service.category]}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
// 
export default MultiServiceSection;
