"use client";
import React, { useState, useEffect } from "react";

const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  // Destructure the timeLeft object
  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      <h1 className="flex justify-center lg:text-[172px] text-5xl mb-5 text-[#000000] font-SFMono-Regular font-bold w-max		">
        {days}d {hours}h {minutes}m {seconds}s
      </h1>
    </div>
  );
};

export default Countdown;
