import { Button } from "flowbite-react";
import React from "react";
import { SharedButton } from "../../Shared/SharedButton";

const ServiceCard = () => {
  return (
    <div className="bg-primary w-68 h-100 rounded-xl shadow-2xl transition duration-500 hover:scale-102 cursor-pointer">
      <div>
        <img className="rounded bg-cover" src="/images/cleaning.jpg" alt="" />
      </div>
      <div className="bg-white rounded-br-[115px] rounded-bl-xl ">
        <div className="text-primary p-3 flex flex-col gap-2">
          <p className="text-2xl font-semibold">Washing And Flooring</p>
          <p className="text-sm font-medium">
            Subsidized housing programs, government schemes, and co-operative
            housing societies often provide more affordable options
          </p>
        </div>
        <div className="p-4">
          <SharedButton label={"Book Now"} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
