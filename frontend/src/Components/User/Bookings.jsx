import React from 'react';

const Bookings = () => {
  const bookings = [
    {
      id: 1,
      service: 'Home Cleaning',
      date: '2025-07-25',
      time: '10:00 AM',
      status: 'Confirmed',
      address: '123 Main Street, Mumbai',
    },
    {
      id: 2,
      service: 'AC Repair',
      date: '2025-07-28',
      time: '2:30 PM',
      status: 'Pending',
      address: '456 Park Avenue, Pune',
    },
    {
      id: 3,
      service: 'Plumbing Service',
      date: '2025-08-01',
      time: '11:00 AM',
      status: 'Completed',
      address: '789 Central Road, Bangalore',
    },
  ];

  return (
    <div className="bg-white p-6 rounded shadow-md w-1/2">
      <h2 className="text-lg font-semibold mb-6">My Bookings</h2>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="p-4 border border-gray-200 rounded shadow hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-md font-semibold text-primary">{booking.service}</h3>
              <span
                className={`text-sm px-2 py-1 rounded ${
                  booking.status === 'Confirmed'
                    ? 'bg-green-100 text-green-600'
                    : booking.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-600'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {booking.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">📅 {booking.date} at 🕒 {booking.time}</p>
            <p className="text-sm text-gray-600">📍 {booking.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
