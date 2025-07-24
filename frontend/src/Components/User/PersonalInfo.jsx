import React, { useState } from 'react';
import profileImg from '../../../public/images/profile.png'; // adjust path if needed
import { Button } from 'flowbite-react';

const initialData = {
  firstName: 'Rutvik',
  lastName: 'Patel',
  email: 'rutvik@example.com',
  phone: '9876543210',
  city: 'Mumbai',
  state: 'Maharashtra',
};

const PersonalInfo = () => {
    const [formData, setFormData] = useState(initialData);
    const [editable, setEditable] = useState(false);
    const handleEditButton = () => {
    if (editable) {
      setFormData(initialData);
    }
    setEditable(!editable);
  };

    const [UpdateButton, setUpdateButton] = useState(false);
    const handleUpdateButton = () => {
        if (editable) {
            console.log('User information updated:', formData);
        }
        setEditable(false);
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

  return (
    <div className="bg-white p-6 rounded shadow-md w-3/5">
      <h2 className="text-lg font-semibold mb-6">Personal Information</h2>

      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 flex-grow">
          <input
            type="text"
            value={formData.firstName}
            readOnly={!editable}
            name='firstName'
            onChange={(e)=>handleChange(e)}
            className="p-2 border border-gray-200 rounded shadow-sm bg-gray-100"
          />
          <input
            type="text"
            value={formData.lastName}
            readOnly={!editable}
            name='lastName'
            onChange={(e)=>handleChange(e)}
            className="p-2 border border-gray-200 rounded shadow-sm bg-gray-100"
          />
          <input
            type="email"
            value={formData.email}
            readOnly={!editable}
            name='email'
            onChange={(e)=>handleChange(e)}
            className="p-2 border border-gray-200 rounded shadow-sm bg-gray-100"
          />
          <input
            type="tel"
            value={formData.phone}
            readOnly={!editable}
            name='phone'
            onChange={(e)=>handleChange(e)}
            className="p-2 border border-gray-200 rounded shadow-sm bg-gray-100"
          />
          <input
            type="text"
            value={formData.city}
            readOnly={!editable}
            name='city'
            onChange={(e)=>handleChange(e)}
            className="p-2 border border-gray-200 rounded shadow-sm bg-gray-100"
          />
          <input
            type="text"
            value={formData.state}
            readOnly={!editable}
            name='state'
            onChange={(e)=>handleChange(e)}
            className="p-2 border border-gray-200 rounded shadow-sm bg-gray-100"
          />
        </div>
      </div>

      {/* Update Button */}
      <div className="col-span-2 mt-6 flex justify-end">
        <div className="mt-6 flex justify-end mr-2">
        <Button
          className={`${editable? "bg-red-500 hover:bg-red-600":"bg-blue-500 hover:bg-blue-600"} text-white px-6 py-2 rounded-4xl  transition cursor-pointer`}
          onClick={handleEditButton}
          
        >
          {editable ? 'Cancel' : 'Edit'}
        </Button>
      </div>

            <div className="mt-6 flex justify-end">
        <button
          className="bg-secondary text-white px-6 py-2 rounded-4xl hover:bg-yellow-600 transition cursor-pointer"
          onClick={handleUpdateButton}
        >
          Update
        </button>
      </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
