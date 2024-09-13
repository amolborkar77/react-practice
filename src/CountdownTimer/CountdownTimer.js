// Build a Countdown Timer: Develop a countdown timer component that starts from
// a specified time and decrements until it reaches zero.
import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let countDown;
    countDown = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countDown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(countDown);
  });

  const startTimer = () => {
    if (seconds > 0) {
      setSeconds(0);
      setMinutes(2);
    } else {
      setMinutes(2);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Countdown</h1>
      <button
        style={{
          backgroundColor: "blue",
          padding: "4px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          color: "white",
          marginBottom: "4px",
        }}
        onClick={startTimer}
      >
        Start Timer
      </button>
      {minutes}:{seconds}
      <button
        style={{
          backgroundColor: "red",
          padding: "4px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          color: "white",
          marginTop: "4px",
        }}
        onClick={() => {
          setMinutes(0);
          setSeconds(0);
        }}
      >
        Stop Timer
      </button>
    </div>
  );
};

export default CountdownTimer;
