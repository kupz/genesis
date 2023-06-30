import "./countdown.scss";
import { gsap } from "gsap";

import React, { useEffect, useRef, useState } from "react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const sample1 = useRef(null);
  useEffect(() => {
    const textElement = sample1.current;

    const toggleVisibility = () => {
      gsap.set(textElement, { visibility: "hidden" });
      gsap.delayedCall(Math.random() * 0.1, () => {
        gsap.set(textElement, { visibility: "visible" });
      });
    };

    const flickerAnimation = gsap.timeline({ repeat: -1 });
    flickerAnimation.to(textElement, { opacity: 0.2, duration: 0.1 });
    flickerAnimation.to(textElement, { opacity: 1, duration: 1 });
    flickerAnimation.eventCallback("onComplete", toggleVisibility);

    return () => {
      flickerAnimation.kill();
    };
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
    <div className="countdown-container " ref={sample1}>
      {/* // <div ref={sample1}> */}
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
