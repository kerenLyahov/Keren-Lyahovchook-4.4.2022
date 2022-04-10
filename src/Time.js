import React from "react";
import "./Time.css";
export default function Day() {
  let date = new Date();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Spet",
    "Oct",
    "Nov",
    "Dec",
  ];
  let todayDate = `${date.getDate()}/${
    month[date.getMonth()]
  }/${date.getUTCFullYear()}`;

  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satarday",
  ];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <span>
        {dayName[date.getDay()]}, {todayDate}
      </span>{" "}
      <span className="clock">
        {hours}:{minutes}
      </span>
    </div>
  );
}
