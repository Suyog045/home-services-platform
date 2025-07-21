import React from 'react'
import CleaningServiceProfile from './CleaningServiceProfile';
import CleaningServiceHeader from './CleaningServiceHeader';

const CleaningServiceLayout = () => {
  return (
    <div className='text-primary'>
        <CleaningServiceHeader/>
        <CleaningServiceProfile/>
    </div>
  )
}

export default CleaningServiceLayout