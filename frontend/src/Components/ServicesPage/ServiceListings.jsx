import React, { useEffect, useState } from 'react'
import ServiceProfileCard from './Card/ServiceProfileCard'
import { Button } from 'flowbite-react'

const ServiceListings = () => {
  const [providers, setProviders] = useState([])
  const [currentPage,setCurrentPage]= useState(1)
  const providersPerPage = 5
  
  useEffect(()=>{

    const data = [
      { name: 'John Doe', specialty: 'Cleaning Services, Plumbing', experience: 5, charges: 500, availability: 'Available Tomorrow', userId: 1 },
      { name: 'Jane Smith', specialty: 'Cleaning & Maintenance', experience: 3, charges: 450, availability: 'Available Tomorrow', userId: 2 },
      { name: 'Alex Johnson', specialty: 'Electrician', experience: 4, charges: 600, availability: 'Available Today', userId: 3 },
      { name: 'Sara Williams', specialty: 'Painting & Repairs', experience: 6, charges: 550, availability: 'Available This Week', userId: 4 },
      { name: 'Bob Brown', specialty: 'Gardening', experience: 2, charges: 300, availability: 'Available Tomorrow', userId: 5 },
      { name: 'Nina White', specialty: 'Furniture Assembly', experience: 5, charges: 650, availability: 'Available Today', userId: 6 },
      { name: 'Mike Black', specialty: 'Pest Control', experience: 3, charges: 400, availability: 'Available Tomorrow', userId: 7 },
      { name: 'Eva Green', specialty: 'Window Cleaning', experience: 2, charges: 250, availability: 'Available Next Week', userId: 8 },
    ];
    setProviders(data);
  }, []);
  const totalPages = Math.ceil(providers.length / providersPerPage)
  const indexOfLast = currentPage*providersPerPage
  const indexOfFirst = indexOfLast - providersPerPage
  const currentProviders = providers.slice(indexOfFirst,indexOfLast)
  return (
    <div className='flex flex-col mb-5'>
    <div className="flex flex-col items-center gap-6 px-4 overflow-y-auto no-scrollbar whitespace-nowrap mb-5">
      {currentProviders.map((provider, index) => (
        <ServiceProfileCard key={index} {...provider} />
      ))}
      
    </div>
      <div className='flex gap-2 w-full justify-center'>
        {
        Array.from({length:totalPages},(_,page)=>(
          <Button onClick={()=> setCurrentPage(page+1)} className='py-4 w-2 cursor-pointer bg-transparent border text-primary hover:bg-secondary hover:text-white'>
            {page+1}
        </Button>
        ))
      }
      </div>
    </div>
  )
}

export default ServiceListings
