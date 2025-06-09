import React from "react";
import ServiceCard from "./Cards/ServiceCard";
import { Button, Carousel, createTheme } from "flowbite-react";
import { Link } from "react-router-dom";
import TestinomialCard from "./Cards/TestinomialCard";

const customTheme = createTheme({
    "root": {
    "base": "relative",
    "leftControl": "hidden",
    "rightControl": "hidden"
  },
  "control": {
    "base": "hidden",
    "icon": "hidden"
  },
  scrollContainer: {
    base: "scrollbar-hide",
  },
});
const Testinomial = () => {
  return (
    <div className="mt-10 md:ml-30 md:mr-30 flex md:flex-row flex-col justify-around items-center">
      <div className="flex flex-col gap-2 w-3/4 md:justify-center md:items-start items-center">
        <h3 className="text-primary font-semibold">Our Testinomials</h3>
        <div className="mb-2 flex flex-col md:items-start items-center ">
          <h2 className="md:text-wrap text-nowrap text-black text-3xl font-semibold mb-3 md:text-left text-center">
            Experience Shared <br /> By Our Users
          </h2>
          <div className="w-24 h-1 bg-secondary rounded-3xl" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-2xl overflow-hidden scrollbar-hide !m-0 !p-0">
          <Carousel pauseOnHover={true} className="scrollbar-hide">
            {[...Array(5)].map((card) => (
            <TestinomialCard />
          ))}
          </Carousel>
      </div>
    </div>
  );
};

export default Testinomial;
