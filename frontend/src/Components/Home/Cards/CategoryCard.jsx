import { Button } from "flowbite-react";
import React from "react";

const CategoryCard = ({category,serviceIcon}) => {
  return (
    <div className='w-54 h-42 border border-gray-300 shadow-sm flex justify-center rounded-xl bg-white p-4 transition-all duration-300 '>
      <div className='text-primary text-center flex flex-col items-center gap-4'>
        <div className="flex items-center h-full">
          <div className="w-12 h-12 flex items-center justify-center text-5xl">
          {serviceIcon}
        </div>
        </div>
        <div className="flex items-center w-full h-full">
          <p className='text-[18px] font-semibold mb-2 break-words text-wrap px-2'>{category}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
