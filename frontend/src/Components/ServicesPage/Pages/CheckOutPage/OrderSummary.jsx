import React from "react";
import { useBooking } from "../../../../hooks/useBooking";
import { Button } from "flowbite-react";

const OrderSummary = ({ services }) => {
  const { removeService } = useBooking();

  if (!services.length) return <p>Loading service details...</p>;

  const handleRemove = (serviceId) => {
    removeService(serviceId);
  };
  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Order Summary</h2>
      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex justify-between items-center p-4 border rounded-lg shadow-md bg-white"
          >
            <div>
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="text-gray-600">₹{service.price}</p>
            </div>
            <Button
              className="text-red-600 font-medium cursor-pointer bg-transparent hover:bg-red-100"
              onClick={() => handleRemove(service.id)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;
