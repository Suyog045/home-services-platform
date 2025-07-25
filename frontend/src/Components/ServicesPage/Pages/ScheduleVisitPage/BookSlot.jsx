import React from "react";
import DatePicker from "../../../../utils/DatePicker";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const BookSlot = () => {
  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-4 mb-5">
      <h1 className="text-2xl font-medium">Book Slot</h1>
      <div className="h-full w-full shadow-md rounded-md flex p-10 gap-4">
        <DatePicker />
        <div className="text-center flex-1 flex flex-col justify-between ">
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium">Available Time Slots</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Array.from({ length: 5 }, (_, i) => {
                return (
                  <Button
                    key={i}
                    className="px-4 py-2 text-nowrap border rounded bg-white text-black cursor-pointer hover:bg-secondary hover:text-white transition"
                  >
                    {`${10 + i}:00 AM`}
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="w-full flex justify-end">
            <Link to={"add-address"}>
            <Button className="bg-secondary hover:bg-secondary-hover cursor-pointer">
              Continue
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSlot;
