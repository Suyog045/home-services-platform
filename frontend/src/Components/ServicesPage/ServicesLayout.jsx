import React, { useEffect } from "react";
import ServiceHeroSection from "./ServiceHeroSection";
import MultiServiceSection from "./MultiServiceSection";
import ServiceListings from "./ServiceListings";
import BookSlot from "./BookSlot";
import { BookingProvider } from "../../Providers/BookingContextProvider";
import { useAuth } from "../../Providers/AuthContext";
import { useAuthModal } from "../../hooks/useAuthModal";

const ServicesLayout = () => {
  const {user} = useAuth()
  const { openModal, setModalType } = useAuthModal();
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
