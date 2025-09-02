import React from 'react';
import { MdDesignServices, MdElectricalServices } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";


const ServicePageCard = ({ category,serviceIcon }) => {
  return (
    <div className='w-28 h-28 flex justify-center rounded-xl shadow-md bg-white p-4 transition-all duration-300 hover:scale-105 '>
      <div className='text-primary text-center flex flex-col justify-center items-center gap-4'>
         <div className="flex items-center h-full">
          <div className="w-6 h-6 flex items-center justify-center text-5xl">
          {serviceIcon}
        </div>
        </div>
        <div className="flex items-center w-full h-full">
          <p className='text-[12px] font-bold mb-2 break-words text-wrap px-2'>{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePageCard;
