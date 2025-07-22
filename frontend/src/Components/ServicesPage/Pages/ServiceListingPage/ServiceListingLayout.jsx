import React from 'react'
import ServiceListings from './ServiceListings';
import ServiceListingHeader from './ServiceListingHeader';

const ServiceListingLayout = () => {
  return (
    <div className='text-primary'>
        <ServiceListingHeader/>
        <ServiceListings/>
    </div>
  )
}

export default ServiceListingLayout