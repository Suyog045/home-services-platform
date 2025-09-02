import React, { useState } from "react";
import DatePicker from "../../utils/DatePicker";
import { Button, Label } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useBooking } from "../../hooks/useBooking";
import { useAuthModal } from "../../hooks/useAuthModal";
import { useAuth } from "../../providers/AuthContext";

const BookSlot = () => {
  const { bookingDetails, setServiceDate, setServiceTime } = useBooking();
  const [selectedDate, setSelectedDate] = useState();
  const { openModal, setModalType } = useAuthModal();
  const { user } = useAuth(); 
  const navigate = useNavigate();

  const handleTimeChange = (e) => {
    setServiceTime(e.target.value);
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toLocaleDateString("sv-SE");
    setSelectedDate(formattedDate);
    setServiceDate(formattedDate);
  };

  const isButtonDisabled = !selectedDate || !bookingDetails.serviceTime || bookingDetails.serviceIds.length == 0;

  const handleContinue = () => {
  if (!user) {
    setModalType("Login");
    openModal();
    return;
  }

  navigate("checkout");
};

  return (
    <div className="flex flex-col items-center mb-5 sticky top-20 self-start">
      <div className="w-full border border-gray-200 rounded-md flex flex-col p-4 gap-4">
        <div className="w-full flex justify-center">
          <DatePicker value={selectedDate} onChange={handleDateChange} />
        </div>

        <div className="text-center flex-1 flex flex-col gap-4 justify-between items-center">
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="time" className="text-sm font-medium">
              Select Time
            </Label>
            <input
              id="time"
              type="time"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={bookingDetails.serviceTime}
              onChange={handleTimeChange}
            />
          </div>

          <div className="flex justify-center w-full">
            {isButtonDisabled ? (
              <Button
                className="w-full bg-secondary cursor-not-allowed opacity-50"
                disabled
              >
                Continue
              </Button>
            ) : (
                <Button onClick={handleContinue} className="w-full bg-secondary hover:bg-secondary-hover cursor-pointer">
                  Continue
                </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSlot;
