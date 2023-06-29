import "./countdown.scss";

import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("July 8, 2023 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container neon">
      <div className="countdown">
        <h5>{countdown.days}</h5> <h5>Days</h5>
      </div>
      <div className="countdown">
        <h5>{countdown.hours}</h5> <h5>Hour</h5>
      </div>
      <div className="countdown">
        <h5>{countdown.minutes} </h5> <h5>mins</h5>
      </div>
      <div className="countdown">
        <h5>{countdown.seconds}</h5> <h5>sec</h5>
      </div>
    </div>
  );
};

export default CountdownTimer;
