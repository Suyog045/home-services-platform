import React from "react";

const OrderSummary = ({ orderData }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 mb-5">
      <h1 className="text-2xl font-medium">Order Summary</h1>

      <div className="w-full shadow-md rounded-md flex flex-col p-10 gap-4 justify-between items-start">
        <div className="flex justify-between w-full">
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{orderData.serviceName}</h2>
            <p className="text-gray-600 text-sm mb-2">
              Category: {orderData.category}
            </p>
            <p className="text-gray-700 text-sm mb-2">
              Description: {orderData.description}
            </p>
            <p className="text-gray-800">Price: ₹{orderData.price}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p>
              <strong>Visit Date:</strong> {orderData.preferredDate}
            </p>
            <p>
              <strong>Visit Time:</strong> {orderData.preferredTime}
            </p>
            <p>
              <strong>Status:</strong> {orderData.status}
            </p>
          </div>
        </div>

        <hr />
        <div className="text-xl font-medium">Address Details</div>
        <p>{orderData.addressLine1}</p>
        {orderData.addressLine2 && <p>{orderData.addressLine2}</p>}
        <p>
          {orderData.city}, {orderData.state} - {orderData.pincode}
        </p>
        {orderData.landmark && <p>Landmark: {orderData.landmark}</p>}
      </div>
    </div>
  );
};

export default OrderSummary;
