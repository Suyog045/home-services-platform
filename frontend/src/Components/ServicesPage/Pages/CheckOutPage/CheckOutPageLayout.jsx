import React from "react";
import OrderSummary from "./OrderSummary";
import CheckOutOrder from "./CheckOutOrder";

const CheckOutPageLayout = () => {
    const orderData = {
  serviceName: "AC Repair",
  category: "Home Appliance",
  description: "General service of split AC unit",
  price: 799,
  preferredDate: "2025-07-25",
  preferredTime: "15:30",
  status: "Scheduled",
  addressLine1: "123, MG Road",
  addressLine2: "Near Big Bazaar",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400001",
  landmark: "Opposite Metro Station"
};

const priceDetails = {
  serviceName: "AC Gas Refill",
  basePrice: 1500,
  discount: 200,
  tax: 100,
  totalAmount: 1400
};
  return (
    <div className="flex">
      <div className='mt-32 h-screen flex items-start w-full mx-8 gap-6'>
        <OrderSummary orderData={orderData} />
        <CheckOutOrder priceDetails={priceDetails} />
      </div>
    </div>
  );
};

export default CheckOutPageLayout;
