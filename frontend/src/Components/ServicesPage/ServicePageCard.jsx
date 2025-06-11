import React from 'react';

const ServicePageCard = ({ category }) => {
  return (
    <div className='w-68 h-50 rounded-xl shadow-2xl bg-white p-4'>
      <div className='text-primary text-center'>
        <p className='text-xl font-semibold mb-2'>{category}</p>
        
      </div>
    </div>
  );
};

export default ServicePageCard;
