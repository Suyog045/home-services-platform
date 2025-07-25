import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const CheckOutOrder = ({priceDetails}) => {
    const {
    serviceName,
    basePrice,
    discount = 0,
    tax = 0,
    totalAmount,
  } = priceDetails;
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 mb-5">
      <h1 className="text-2xl font-medium">Checkout Summary</h1>

      <div className="w-full shadow-md rounded-md p-8 flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-semibold">{serviceName}</h2>
        </div>

        <div className="flex justify-between">
          <span>Service Charges</span>
          <span>₹{basePrice}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>- ₹{discount}</span>
          </div>
        )}

        {tax > 0 && (
          <div className="flex justify-between">
            <span>Tax</span>
            <span>+ ₹{tax}</span>
          </div>
        )}

        <hr />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>

        <div className="w-full flex justify-end pt-4">
          <Link to="/payment">
            <Button className="bg-secondary hover:bg-secondary-hover cursor-pointer">
              Proceed to Payment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckOutOrder