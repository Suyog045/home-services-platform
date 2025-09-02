import React from "react";
import ServiceCard from "./Cards/CategoryCard";
import { Button, Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import TestinomialCard from "./Cards/TestimonialCard";

const Testinomial = () => {
  return (
    <div className="mt-20 md:ml-30 md:mr-30 flex md:flex-row flex-col items-center gap-4">
      <div className="flex flex-col gap-2 w-3/4 md:justify-center md:items-start items-center">
        <h3 className="text-primary font-semibold">Our Testinomials</h3>
        <div className="mb-2 flex flex-col md:items-start items-center ">
          <h2 className="md:text-wrap text-nowrap text-black text-3xl font-semibold mb-3 md:text-left text-center">
            Experience Shared <br /> By Our Users
          </h2>
          <div className="w-24 h-1 bg-secondary rounded-3xl" />
        </div>
      </div>
      <div className="overflow-hidden w-full">
        <div className="relative w-max flex overflow-hidden gap-4 animate-slide ">
          {[...Array(10)].map(() => (
            <TestinomialCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testinomial;
