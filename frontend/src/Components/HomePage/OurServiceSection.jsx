import React from "react";
import ServiceCard from "./ServiceCard";
import { Button } from "flowbite-react";

const OurServiceSection = () => {
  return (
    <div className="mt-10 ml-30 mr-30 flex justify-around">
      <div className="flex flex-col gap-2 w-3/4 justify-center">
        <h3 className="text-primary font-semibold">Our Services</h3>
        <div className="mb-2">
          <h2 className="text-wrap text-black text-3xl font-semibold mb-3">
            What Services <br /> We Provide ?
          </h2>
          <div className="w-24 h-1 bg-secondary rounded-3xl" />
        </div>
        <div>
          <Button className="bg-secondary rounded-4xl hover:bg-secondary cursor-pointer text-nowrap text-md">
            Get Started
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-8">
        {[...Array(3)].map((key) => (
          <ServiceCard key={key} />
        ))}
      </div>
    </div>
  );
};

export default OurServiceSection;
