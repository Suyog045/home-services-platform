import React from 'react';
import { MdDesignServices, MdElectricalServices } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";


const ServicePageCard = ({ category,serviceIcon }) => {
  return (
    <div className='w-68 h-50 flex justify-center rounded-xl shadow-2xl bg-white p-4 transition-all duration-300 hover:scale-105 '>
      <div className='text-primary text-center flex flex-col justify-center items-center gap-4'>
        {serviceIcon}
        <p className='text-xl font-semibold mb-2'>{category}</p>
      </div>
    </div>
  );
};

export default ServicePageCard;
