import React from 'react'
import ServiceListings from '../../ServiceListings';
import ServiceListingHeader from './ServiceListingHeader';
import { useParams } from 'react-router-dom';

const ServiceListingLayout = () => {
  const {serviceType} = useParams()
  return (
    <div className='text-primary flex flex-col justify-center '>
        <ServiceListingHeader serviceType={serviceType}/>
        <ServiceListings/>
    </div>
  )
}

export default ServiceListingLayout