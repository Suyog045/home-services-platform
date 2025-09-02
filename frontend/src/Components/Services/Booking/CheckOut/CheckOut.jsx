import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../../../../api/Order";
import { useBooking } from "../../../../hooks/useBooking";
import { useAuth } from "../../../../providers/AuthContext";
import { toast } from "react-toastify";

const CheckOut = ({ services }) => {
  const [basePrice, setBasePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();
  const { bookingDetails, clearCart } = useBooking();
  const { user } = useAuth();

  useEffect(() => {
    const calculatedBase = services.reduce((acc, service) => acc + service.price, 0);
    const calculatedDiscount = calculatedBase > 1000 ? calculatedBase * 0.1 : 0;
    const calculatedTax = (calculatedBase - calculatedDiscount) * 0.18;
    const calculatedTotal = calculatedBase - calculatedDiscount + calculatedTax;

    setBasePrice(calculatedBase);
    setDiscount(calculatedDiscount);
    setTax(calculatedTax);
    setTotalAmount(calculatedTotal);
  }, [services]);

  const handlePlaceOrder = async () => {
    try {
      await placeOrder(user.id, bookingDetails,user.token);
      clearCart();
      navigate("/services/booking-success");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (!services.length) return null;

  return (
    <div className="flex flex-col w-full md:w-1/3 items-center justify-center gap-4 mb-5">
      <div className="w-full shadow-md rounded-md p-8 flex flex-col gap-4 bg-white">
        <h2 className="text-xl font-semibold text-center">Price Breakdown</h2>

        <div className="flex justify-between">
          <span>Service Charges</span>
          <span>₹{basePrice.toFixed(2)}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>- ₹{discount.toFixed(2)}</span>
          </div>
        )}

        {tax > 0 && (
          <div className="flex justify-between">
            <span>Tax (18%)</span>
            <span>+ ₹{tax.toFixed(2)}</span>
          </div>
        )}

        <hr />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total Amount</span>
          <span>₹{totalAmount.toFixed(2)}</span>
        </div>

        <div className="w-full pt-4">
          <Button
            className="bg-green-600 hover:bg-green-700 w-full cursor-pointer"
            onClick={handlePlaceOrder}
          >
            Schedule Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
