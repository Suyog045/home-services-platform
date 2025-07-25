import React from "react";

export default function PartnerHome() {
  return (
    <div className="flex flex-1 flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-[1200px] mx-auto w-full bg-[#061a36] min-h-[80vh]">
      
      <div className="flex-1 flex flex-col justify-center items-start">
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
        <ul className="list-disc list-inside text-base text-white space-y-2 mb-6">
          <li>Access to thousands of customers</li>
          <li>Flexible work schedule</li>
          <li>Timely payments</li>
          <li>Supportive partner community</li>
        </ul>
      </div>
      {/* Right: Partner Image */}
      <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
        <img
          src="/images/background.png"
          alt="Home Service Partners"
          className="w-[400px] md:w-[500px] lg:w-[600px] object-contain"
        />
      </div>
    </div>
  );
}