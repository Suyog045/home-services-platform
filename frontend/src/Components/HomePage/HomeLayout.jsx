import React from "react";
import HeroSection from "./HeroSection";
import OurServiceSection from "./OurServiceSection";
import HomeFeature from "./HomeFeature";
import Testinomial from "./Testimonial";

const HomeLayout = () => {
  return (
    <div className="text-primary">
      <HeroSection />
      <OurServiceSection />
      <HomeFeature />
      <Testinomial />
    </div>
  );
};
export default HomeLayout;
