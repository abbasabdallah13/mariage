import React from "react";
import { useEffect, useState } from "react";
import "./index.scss";

// we use a state to store the countdown values to 0 by default
const DDay = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // we set the date of the wedding
  const [date] = useState(new Date("May 20, 2023 10:00:00").getTime());

  const updateCountdown = () => {
    const now = new Date().getTime(); // get the current date

    // get the difference between the current date and the wedding date
    const gap = date - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    // we return the greatest integer less than or equal to the quotient of the two numbers
    const textDay = Math.floor(gap / days);
    const textHour = Math.floor((gap % days) / hours);
    const textMinute = Math.floor((gap % hours) / minutes);
    const textSecond = Math.floor((gap % minutes) / seconds);

    setCountdown({
      // we update the state with the new values
      days: textDay,
      hours: textHour,
      minutes: textMinute,
      seconds: textSecond,
    });
  };

  useEffect(() => {
    // we use the useEffect hook to update the countdown every second
    setInterval(updateCountdown, 1000);
  }, []);

  // if hours or minutes or seconds are less than 10, we add a 0 before
  const format = (item) => (item < 10 ? `0${item}` : item);
  

  const { days, hours, minutes, seconds } = countdown; // we destructure the state

  return (
    <div className="dDayContainer">
      <div className="dDayContainer_Count">
        <div className="dDayContainer_days"><span>{format(days)}</span></div>
      </div>
      <div className="dDayContainer_Count">
        <div className="dDayContainer_hours"><span>{format(hours)}</span></div>
      </div>
      <div className="dDayContainer_Count">
        <div className="dDayContainer_minutes"><span>{format(minutes)}</span></div>
      </div>
      <div className="dDayContainer_Count">
        <div className="dDayContainer_seconds"><span>{format(seconds)}</span></div>
      </div>
    </div>
  );
};

export default DDay;
