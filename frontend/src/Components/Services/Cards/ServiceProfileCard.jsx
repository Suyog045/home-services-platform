import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { useBooking } from "../../../hooks/useBooking";
import { useAuth } from "../../../providers/AuthContext";
import { useAuthModal } from "../../../hooks/useAuthModal";

const ServiceProfileCard = ({ service }) => {
  const { bookingDetails, addServiceId, removeService } = useBooking();
  const { user } = useAuth();
  const { openModal, setModalType } = useAuthModal();

  const isAdded = bookingDetails.serviceIds.includes(service.id);
  const handleAddService = () => {
    if (!user) {
      setModalType("Login");
      openModal();
      return;
    }
    if (isAdded) {
      removeService(service.id);
    }else{
      addServiceId(service.id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-3xl flex items-center gap-6">
      {/* <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover"
      /> */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{service.name}</h2>
        <p className="text-gray-600 text-sm">
          {service.description} <br />
          Charges: ₹{service.price}/-
        </p>
      </div>
      <div className="text-center flex flex-col items-center">
        <p className="text-green-600 font-semibold mb-2">Available</p>
        <Button
          onClick={handleAddService}
          // disabled={isAdded}
          className={`${isAdded ? "bg-red-600 hover:bg-red-500" : "bg-secondary hover:bg-secondary-hover"} text-white px-4 py-2 rounded-full  cursor-pointer`}
        >
          {isAdded ? "Remove" : "Add"}
        </Button>
      </div>
    </div>
  );
};

export default ServiceProfileCard;
