import React from 'react'
import HeroSection from './HeroSection'
import OurServiceSection from './OurServiceSection'

const HomeLayout = () => {
  return (
    <div className='text-primary'>
      <HeroSection/>
      <OurServiceSection/>
    </div>
  )
}
export default HomeLayout