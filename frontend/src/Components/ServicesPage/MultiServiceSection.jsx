import React, { useEffect, useState } from "react";
import ServicePageCard from "./Card/ServicePageCard";
import { MdCleaningServices, MdDesignServices, MdElectricalServices, MdOutlineMiscellaneousServices, MdPestControl } from "react-icons/md";
import { GrCompliance, GrShieldSecurity, GrUpgrade } from "react-icons/gr";
import { GiAutoRepair } from "react-icons/gi";
import { SiRenovate } from "react-icons/si";
import {Link} from "react-router-dom"
import ShowMoreCard from "./Card/ShowMoreCard";
import { getAllCategories } from "../../api/CatalogService";

const MultiServiceSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll,setShowAll] = useState(false)

  const serviceIcon = 
    {"Cleaning Services":<MdCleaningServices className="text-5xl" />,"Electrical Services" : <MdElectricalServices className="text-5xl" />
      ,"Carpentry Services":<MdDesignServices className="text-5xl" />
      ,"Appliance Repair and Installation":<GiAutoRepair className="text-5xl" />
      ,"Home Renovation & Maintenance":<SiRenovate className="text-5xl" />,
      "Pest Control":<MdPestControl className="text-5xl" />,"Home Security Services":<GrShieldSecurity className="text-5xl" />
      ,"Safety & Compliance": <GrCompliance className="text-5xl" />,
      "Home Improvement Services":<GrUpgrade className="text-5xl" />
      ,"Miscellaneous Services":<MdOutlineMiscellaneousServices className="text-5xl" />};

    const visibleServices = showAll ? services : services.slice(0,5)

  useEffect(() => {
    const loadServices = async () => {
      const data = await getAllCategories();
      setServices(data);
      setLoading(false);
    };

    loadServices();
  }, []);

  return (
    <div className="sticky top-20 self-start w-95">
      <div className="flex flex-col gap-2 items-start mb-10">
        {loading ? (
          <p className="text-gray-600 mt-4">Loading services...</p>
        ) : (
          <div className="flex flex-wrap gap-3 p-2 border border-gray-200 rounded justify-start">
            {visibleServices.map((service, index) => (
              <Link to={`/services/${service.id}`} key={index}>
                <ServicePageCard
                  category={service.name}
                  serviceIcon={serviceIcon[service.name]}
                />
              </Link>
            ))}
            {
              !showAll && <div onClick={()=> setShowAll(true)}>
              <ShowMoreCard/>
            </div>
            }
          </div>
        )}
      </div>
    </div>
  );
};
// 
export default MultiServiceSection;
