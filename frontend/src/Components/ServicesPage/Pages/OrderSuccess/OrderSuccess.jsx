import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { useBooking } from "../../../../hooks/useBooking";

const OrderSuccess = () => {
    const {clearCart} = useBooking();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
        <div className="flex justify-center">
          <AiFillCheckCircle className="text-yellow-500 mb-4" size={80} />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Order Received!
        </h2>

        <p className="text-gray-600 mb-4">
          Thank you for scheduling a service with us. Your order has been placed successfully. A service partner will be assigned to you shortly.
        </p>

        <p className="text-sm text-gray-500 italic">
          You'll receive a confirmation once a partner is assigned.
        </p>

        <div className="flex flex-col gap-3 mt-6">
          <Link to="/user/orders">
            <Button color="gray" className="w-full cursor-pointer">
              View My Orders
            </Button>
          </Link>
          <Link to="/services">
            <Button onClick={clearCart} className="w-full bg-secondary hover:bg-secondary-hover cursor-pointer">
              Book Another Service
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
