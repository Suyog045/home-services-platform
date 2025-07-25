import React from 'react'
import PartnerProfileSummary from './PartnerProfileSummary'
import BookSlot from './BookSlot'

const ScheduleVisitPageLayout = () => {
    const dummyServiceProvider = {
  id: 301,
  name: 'Ramesh Kumar',
  profilePicture: '/images/profile.png',
  location: {
    city: 'Mumbai',
    area: 'Borivali West',
    pincode: '400092',
  },
  experience: 8,
  rating: 4.7,
  totalReviews: 132,
  feedbacks: [
    {
      user: 'Neha Joshi',
      rating: 5,
      comment: 'Very punctual and solved the issue quickly!',
      date: '2025-06-15',
    },
    {
      user: 'Ajay Shah',
      rating: 4,
      comment: 'Good service, but was 10 minutes late.',
      date: '2025-06-10',
    },
  ],
  services: [
    'AC Installation',
    'AC Repair',
    'Gas Refill',
    'Annual Maintenance',
  ],
  serviceCharges: {
    'AC Installation': 1200,
    'AC Repair': 600,
    'Gas Refill': 1000,
    'Annual Maintenance': 1500,
  },
  availableSlots: [
    { id: 1, date: '2025-07-23', time: '10:00 AM - 11:00 AM' },
    { id: 2, date: '2025-07-23', time: '3:00 PM - 4:00 PM' },
    { id: 3, date: '2025-07-24', time: '9:00 AM - 10:00 AM' },
  ],
};
  return (
    <div className='flex'>
        <div className='mt-16 h-screen flex items-center w-full mx-8 gap-6'>
            <PartnerProfileSummary dummyServiceProvider={dummyServiceProvider}/>
            <BookSlot dummyServiceProvider={dummyServiceProvider}/>
        </div>
    </div>
  )
}

export default ScheduleVisitPageLayout