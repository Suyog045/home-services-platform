import React from "react";
import ServiceHeroSection from "./ServiceHeroSection";
import MultiServiceSection from "./MultiServiceSection";
import ServiceListings from "./ServiceListings";
import BookSlot from "./BookSlot";

const ServicesLayout = () => {
  return (
    <div className="text-primary mx-20">
      <ServiceHeroSection />
      <div className="flex justify-around gap-4">
        <MultiServiceSection />
        <ServiceListings />
        <BookSlot/>
      </div>
    </div>
  );
};

export default ServicesLayout;
