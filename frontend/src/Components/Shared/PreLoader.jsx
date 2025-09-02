import React, { useEffect, useState } from "react";
import "./Preloader.css";
import { FaBroom, FaHammer, FaWrench } from "react-icons/fa";

const icons = [
  <FaBroom/>,
  <FaHammer />, 
  <FaWrench />
];

const Preloader = () => {
  const [counter, setCounter] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCounter((prev) => (prev + 1) % icons.length);
    }, 5000);

    const loadingInterval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
        clearInterval(loadingInterval);
        return 100;
      }
        return prev + 1;
      });
    }, 120);

    return () => {
      clearInterval(iconInterval);
      clearInterval(loadingInterval);
    };
  }, []);

  return (
    <div className="loader">
      <div className="image">
        <div className="text-5xl text-primary">{icons[counter]}</div>
      </div>
      <span>{percentage}%</span>
    </div>
  );
};

export default Preloader;
