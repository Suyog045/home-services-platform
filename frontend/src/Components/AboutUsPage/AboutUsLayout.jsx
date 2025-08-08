import React from "react";
import AboutUsHead from "./AboutUsHead";
import AboutUsMain from "./AboutUsMain";
import AboutUsWhyUs from "./AboutUsWhyUs";
import AboutUsTag from "./AboutUsTag";
const AboutUsLayout = () => {
  return (
    <div className="text-primary">
      <AboutUsHead />
      <AboutUsMain />
      <AboutUsWhyUs />
      <AboutUsTag />
    </div>
  );
};

export default AboutUsLayout;
