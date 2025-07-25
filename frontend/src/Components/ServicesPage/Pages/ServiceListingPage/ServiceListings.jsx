import React, { useEffect, useState } from 'react'
import ServiceProfileCard from '../Card/ServiceProfileCard'

const ServiceListings = () => {
  const [providers, setProviders] = useState([])

  useEffect(() => {
    const data = [
      {
        name: 'John Doe',
        // image: 'https://via.placeholder.com/150',
        specialty: 'Cleaning Services, Plumbing',
        experience: 5,
        charges: 500,
        availability: 'Available Tomorrow',
        userId: 1,
      },
      {
        name: 'Jane Smith',
        // image: 'https://via.placeholder.com/150',
        specialty: 'Cleaning & Maintenance',
        experience: 3,
        charges: 450,
        availability: 'Available Tomorrow',
        userId: 2,
      },
      
    ]

    setProviders(data)
  }, [])

  return (
    <div className="flex flex-col items-center gap-6 mt-10 px-4">
      {providers.map((provider, index) => (
        <ServiceProfileCard key={index} {...provider} />
      ))}
    </div>
  )
}

export default ServiceListings
