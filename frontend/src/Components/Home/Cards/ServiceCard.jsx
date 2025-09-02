import { Button } from "flowbite-react";
import React from "react";

const ServiceCard = () => {
  return (
    <div className='w-64 h-42 border border-gray-300 shadow-sm flex justify-center rounded-xl bg-white transition-all duration-300 '>
      <div className=' text-primary text-center flex flex-col items-center gap-4 bg-cover'>
        <img src="/images/cleaning.jpg" alt="" className="w-full h-full object-cover rounded-md" />
      </div>
    </div>
  );
};

export default ServiceCard;
