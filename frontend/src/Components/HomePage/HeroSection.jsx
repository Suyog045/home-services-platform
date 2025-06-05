import { Button } from 'flowbite-react'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-screen bg-primary mb-4 flex justify-center gap-22'>
        <div className='flex gap-5 flex-col justify-center'>
            <h2 className='text-white text-6xl font-bold text-wrap'>Lorem ipsum dolor <br /> sit amet</h2>
            <p className='text-white text-2xl font-medium text-wrap'>Lorem ipsum dolor sit amet</p>
            <div>
                <Button className='bg-secondary rounded-4xl hover:bg-secondary cursor-pointer text-nowrap text-xl'>
                   Get Started
                </Button>
            </div>
        </div>
        <div className='h-100 flex items-start'>
            <img className='h-154 mt-23.5' src="/images/background.png" alt="" />
        </div>
    </div>
  )
}

export default HeroSection