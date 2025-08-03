import React from "react";

const ShowMoreCard = () => {
  return (
    <div className="w-28 h-28 flex justify-center rounded-xl shadow-md bg-white p-4 transition-all duration-300 hover:scale-105 cursor-pointer ">
      <div className="text-primary text-center flex flex-col justify-center items-center gap-2">
          <div className="flex items-center justify-center text-2xl">
            5
          </div>
          <p className="text-[11px] font-semibold mb-2 break-words text-wrap px-2">
            Show More
          </p>
      </div>
    </div>
  );
};

export default ShowMoreCard;
