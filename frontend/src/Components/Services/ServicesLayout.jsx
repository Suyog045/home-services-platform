import React from "react";
import ServiceHeroSection from "./ServiceHeroSection";
import MultiServiceSection from "./MultiServiceSection";
import ServiceListings from "./ServiceListings";
import BookSlot from "./BookSlot";
import { useAuth } from "../../providers/AuthContext";

const ServicesLayout = () => {
  const {user} = useAuth()
  return (
    <div className="text-primary mx-20">
      <ServiceHeroSection />
      <div className={`flex ${user ? "justify-around" : "justify-center"} gap-4`}>
        <MultiServiceSection />
        <ServiceListings />
        { user &&
          <BookSlot />
        }
      </div>
    </div>
  );
};

export default ServicesLayout;
