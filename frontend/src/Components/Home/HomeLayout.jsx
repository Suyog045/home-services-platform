import React from "react";
import HeroSection from "./HeroSection";
import OurServiceSection from "./OurServiceSection";
import HomeFeature from "./HomeFeature";
import Testinomial from "./Testimonial";
import Services from "./Services";
import BecomePartner from "./BecomePartner";

const HomeLayout = () => {
  return (
    <div className="text-primary">
      <HeroSection />
      <OurServiceSection />
      <HomeFeature />
      {/* <Services/> */}
      <Testinomial />
      <BecomePartner/>
    </div>
  );
};
export default HomeLayout;
