import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const BecomePartner = () => {
  return (
    <div className='w-full'>
        <div className=" text-primary py-18 px-6 md:px-20 rounded-xl mt-16 text-center flex flex-col items-center gap-6">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Are you a skilled professional?
      </h2>
      <div className='w-2/3'>
        <p className="text-md md:text-lg break-words text-wrap">Elevate your business by joining HomeTriangle as a Service Expert. Highlight your expertise, engage with homeowners, and expand your reach. Become a member now!</p>
      </div>
      <Link to="/partner">
        <Button className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2 rounded-3xl transition-all duration-300 cursor-pointer">
          Become Now
        </Button>
      </Link>
    </div>
    </div>
  )
}

export default BecomePartner