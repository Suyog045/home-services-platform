import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen mb-4">

      <img
        src="/images/service-bg.jpg"
        alt=""
        className="w-full h-full object-cover absolute inset-0"
        loading='lazy'
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.8),rgba(141,141,141,0.2))] z-10" />

      <div className="w-full relative z-20 flex flex-col justify-center items-center text-white h-full px-6 md:px-20 gap-6 text-center md:text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-center">
          Bringing Experts to Your <span className="text-secondary">Doorstep</span>.
        </h2>
        <p className="text-xl md:text-2xl font-medium">
          Simplify Home Care with a Single Tap
        </p>
        <Link to="/services">
          <Button className="bg-secondary rounded-4xl text-lg transition-all duration-300 hover:bg-secondary-hover cursor-pointer hover:scale-105 gap-1 hover:gap-2">
            Get Started <span className="text-2xl">&#8594;</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
