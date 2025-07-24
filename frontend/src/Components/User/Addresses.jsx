import React from 'react';

const MyAddresses = () => {
  const addresses = [
    {
      id: 1,
      type: 'Home',
      addressLine: '123 Main Street, Near City Mall, Mumbai',
      pincode: '400001',
      phone: '9876543210',
    },
    {
      id: 2,
      type: 'Work',
      addressLine: '456 Business Park, Andheri East, Mumbai',
      pincode: '400069',
      phone: '9876512345',
    },
    {
      id: 3,
      type: 'Other',
      addressLine: '789 Garden Lane, Kothrud, Pune',
      pincode: '411038',
      phone: '9988776655',
    },
  ];

  return (
    <div className="bg-white p-6 rounded shadow-md w-1/2">
      <h2 className="text-lg font-semibold mb-6">My Addresses</h2>

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
    </div>
  );
};

export default MyAddresses;
