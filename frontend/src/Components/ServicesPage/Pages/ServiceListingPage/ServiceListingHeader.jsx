import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ServiceListingHeader = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-150 bg-white rounded-lg overflow-hidden justify-around items-center ">
  <div className="md:w-1/3 p-10 flex flex-col justify-center items-start bg-white">
    <h1 className="text-3xl md:text-6xl text-nowrap font-bold text-primary mb-4">Cleaning Services</h1>
    <p className="text-gray-600 mb-6">
      Subsidized housing programs, government schemes, and co-operative housing societies
      often provide more affordable options
    </p>
    <Link to="/services/cleaning-services">
      <Button className="bg-secondary hover:bg-secondary-hover text-white px-5 py-2 rounded-lg font-medium ">
        Get your work done <span className="text-2xl">&#8594;</span>
      </Button>
    </Link>
    
  </div>

  <div className="h-full w-1/3 flex justify=center items-center">
    <div className="h-120 w-full bg-primary rounded-[100px] flex justify-center items-center mt-14">
        <img
            src="/images/cleaning-servicebg.png"
            alt="Cleaning Service"
            className="w-full h-full object-cover mr-54 rounded-tl-[100px] rounded-bl-[100px]"></img>
    </div>
  </div>
</div>
  )
}

export default ServiceListingHeader
