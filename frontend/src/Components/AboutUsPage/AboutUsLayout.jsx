import React from 'react'
import AboutUsHead from './AboutUsHead'
import AboutUsMain from './AboutUsMain'
import AboutUsWhyUs from './AboutUsWhyUs'
import AboutUsBuild from './AboutUsBuild'
const AboutUsLayout = () => {
  return (
    <div className="text-primary">
    <AboutUsHead/>
    <AboutUsMain/>
    <AboutUsWhyUs/>
    <AboutUsBuild/>
    </div>

  )
}

export default AboutUsLayout