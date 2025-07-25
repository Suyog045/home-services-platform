import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const HomeFeature = () => {
  return (
    <div className="mt-20 ml-5 mr-5 md:ml-10 md:mr-20 flex md:flex-row flex-col justify-around items-center md:gap-30 gap-4">
      <div>
        <img src="/images/cleaning.jpg" alt="" className="rounded md:h-84" />
      </div>
      <div className="flex flex-col gap-2 md:w-1/3">
        <h3 className="text-primary font-semibold text-center md:text-left">
          Why We ?
        </h3>
        <div className="mb-2 flex flex-col md:items-start items-center ">
          <h2 className="md:text-wrap text-nowrap text-black text-3xl font-semibold mb-3 md:text-left text-center">
            More affordable options <br /> than the open market.
          </h2>
          <div className="w-24 h-1 bg-secondary rounded-3xl" />
          <p className="md:text-wrap mt-3 text-center md:text-left ">
            Subsidized housing programs, government schemes, and co-operative
            housing societies often provide more affordable options
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <Link to={"services"}>
            <Button className="bg-secondary rounded-4xl hover:bg-secondary cursor-pointer text-nowrap text-md flex items-center justify-between gap-1 hover:gap-2 transition-all duration-300 hover:scale-105">
              Get Your Work Done <span className="text-2xl">&#8594;</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
