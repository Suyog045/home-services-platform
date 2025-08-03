import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ServiceProfileCard = ({ name, specialty, experience, charges, availability, userId }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-3xl flex items-center gap-6">
      {/* <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover"
      /> */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm">
          Specialty: {specialty} <br />
          Years of Experience: {experience}+ <br />
          Charges: ₹{charges}/-
        </p>
      </div>
      <div className="text-center flex flex-col items-center">
        <p className="text-green-600 font-semibold mb-2">{availability}</p>
        <Link to={`book-appointment/${userId}`}>
          <Button className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-secondary-hover cursor-pointer">
            Book Visit
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ServiceProfileCard
