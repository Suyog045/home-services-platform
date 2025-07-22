import { Card } from "flowbite-react";
import React from "react";

const TestinomialCard = () => {
  return (
    <div className="w-full rounded-xl shadow-2xl cursor-pointer">
      <Card className="max-w-2xs md:max-w-sm">
        <img src="/images/profile.png" alt="" className="w-16" />
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
};

export default TestinomialCard;
