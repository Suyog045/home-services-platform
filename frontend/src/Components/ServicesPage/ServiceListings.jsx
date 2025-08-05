import React, { useEffect, useState } from 'react'
import ServiceProfileCard from './Card/ServiceProfileCard'
import { Button } from 'flowbite-react'
import { getServicesByCategoryId } from '../../api/CatalogService'
import { useParams } from 'react-router-dom'

const ServiceListings = () => {
  let {categoryId} = useParams()
  const [services, setServices] = useState([])
  const [currentPage,setCurrentPage]= useState(1)
  const providersPerPage = 5
  
  useEffect(() => {
    const fetchServices = async () => {
      try {
        let res;
        if(categoryId==undefined){
          res = await getServicesByCategoryId(1);
        }else{
          res = await getServicesByCategoryId(categoryId);
        }
        setServices(res || []);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      }
    };
    fetchServices();
  }, [categoryId]);
  const totalPages = Math.ceil(services.length / providersPerPage)
  const indexOfLast = currentPage*providersPerPage
  const indexOfFirst = indexOfLast - providersPerPage
  const currentProviders = services.slice(indexOfFirst,indexOfLast)
  return (
    <div className='flex flex-col mb-5'>
    <div className="flex flex-col items-center gap-6 px-4 overflow-y-auto no-scrollbar whitespace-nowrap mb-5">
      {currentProviders.map((service) => (
        <ServiceProfileCard key={service.id} service={service} />
      ))}
      
    </div>
      <div className='flex gap-2 w-full justify-center'>
        {totalPages!=1 &&
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
