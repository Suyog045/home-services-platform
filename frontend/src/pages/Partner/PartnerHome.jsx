import React from "react";

export default function PartnerHome() {
  return (
    <div className="flex flex-1 flex-col lg:flex-row items-center justify-between px-8 py-16 w-full h-screen relative">
      <img
        src="/images/partner-bg.jpg"
        alt=""
        className="w-full h-full object-cover absolute inset-0"
        loading='lazy'
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.8),rgba(141,141,141,0.2))] z-10" />
      
      <div className="w-full relative z-20 flex flex-col justify-center items-center text-white h-full px-6 md:px-20 gap-6 text-center md:text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Become a HomeMate Partner
        </h1>
        <p className="text-lg text-white mb-6">
          Join{" "}
          <span className="text-yellow-400 font-bold">HomeMate</span> and unlock
          new opportunities!
          <br />
          <span className="italic text-yellow-300">
            Grow your business, reach more customers, and increase your earnings
            with us.
          </span>
        </p>
        {/* <ul className="list-disc list-inside text-base text-white space-y-2 mb-6">
          <li>Access to thousands of customers</li>
          <li>Flexible work schedule</li>
          <li>Timely payments</li>
          <li>Supportive partner community</li>
        </ul> */}
      </div>
      
    </div>
  );
}