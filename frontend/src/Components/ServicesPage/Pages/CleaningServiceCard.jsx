// src/Components/CleaningServiceCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const CleaningServiceCard = ({ name, image, specialty, experience, charges, availability, userId }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-3xl flex items-center gap-6">
      <img
        src="https://via.placeholder.com/150"
        alt={name}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm">
          Specialty: {specialty} <br />
          Years of Experience: {experience}+ <br />
          Charges: ₹{charges}/-
        </p>
      </div>
      <div className="text-center">
        <p className="text-green-600 font-semibold mb-2">{availability}</p>
        <button className="bg-secondary text-white px-4 py-2 rounded-full">
          Book Visit
        </button>
        <div className="mt-2">
          <Link to={`/profile/${userId}`} className="text-sm text-blue-600 hover:underline">
            View Profile →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CleaningServiceCard
