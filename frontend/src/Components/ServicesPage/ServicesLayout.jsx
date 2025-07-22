import React from 'react'
import ServiceHeroSection from './ServiceHeroSection'
import MultiServiceSection from './MultiServiceSection'

const ServicesLayout = () => {
  return (
    <div className='text-primary'>
         <ServiceHeroSection/>
         <MultiServiceSection/>
    </div>
  )
}

export default ServicesLayout;
