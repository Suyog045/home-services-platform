import React from 'react';
import { useAuth } from '../../Providers/AuthContext';


const ChangeAddress = () => {
   const { user } = useAuth();

  const addresses = user?.addresses || [];

  return (
    <div className="bg-white p-6 rounded shadow-md w-1/2">
      <h2 className="text-lg font-semibold mb-6">My Addresses</h2>

    {addresses.length > 0 ? (
      <div className="space-y-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="p-4 border border-gray-200 rounded shadow hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-md font-semibold text-primary">{addr.type} Address</h3>
            </div>
            <p className="text-sm text-gray-600">📍 {addr.addressLine}</p>
            <p className="text-sm text-gray-600">📮 {addr.pincode}</p>
            <p className="text-sm text-gray-600">📞 {addr.phone}</p>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-500">No addresses found. Please add an address.</p>
    )}
    </div>
  );
};

export default ChangeAddress;
