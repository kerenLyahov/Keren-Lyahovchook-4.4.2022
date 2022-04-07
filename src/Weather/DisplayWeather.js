import React, { useState, useEffect } from "react";
import "./DisplayWeather.css";

export default function DisplayWeather(props) {
  let date = new Date();
  let dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let days = [0, 1, 2, 3, 4];
  let [temp, setTemp] = useState({
    ready: false,
    temp: props.current.temp_c,
    unit: "°C",
    min: days.map((i) => {
      return props.min[i];
    }),
    max: days.map((i) => {
      return props.max[i];
    }),
  });
  let [update, setUpdate] = useState({ ready: false });

  function search() {
    setTemp({
      ready: true,
      temp: props.current.temp_c,
      unit: "°C",
      min: days.map((i) => {
        return props.min[i];
      }),
      max: days.map((i) => {
        return props.max[i];
      }),
    });
    setUpdate({ ready: true, temp: props.current.temp_c });
  }
  function celsius() {
    setTemp({
      ready: true,
      temp: props.current.temp_c,
      unit: "°C",
      min: days.map((i) => {
        return props.min[i];
      }),
      max: days.map((i) => {
        return props.max[i];
      }),
    });
  }
  function fahrenheit() {
    setTemp({
      ready: true,
      temp: props.current.temp_f,
      unit: "°F",
      min: days.map((i) => {
        return Math.round((props.min[i] * 9) / 5 + 32);
      }),
      max: days.map((i) => {
        return Math.round((props.max[i] * 9) / 5 + 32);
      }),
    });
  }

  useEffect(() => {
    setUpdate({
      ready: false,
    });
    fahrenheit();
    celsius();
  }, [props.name && update.temp !== props.current.temp_c]);

  if (update.ready) {
    return (
      <div className="body">
        <div>
          <button className="btn btn-primary btn-sm unit-btn" onClick={celsius}>
            °C
          </button>{" "}
          <button
            className="btn btn-primary btn-sm unit-btn"
            onClick={fahrenheit}
          >
            °F
          </button>
        </div>
        <div className="cityName"> {props.name}</div>{" "}
        <div>
          <div className="temperature">
            {temp.temp}
            {temp.unit}
          </div>
        </div>
        <div className="description">{props.current.description}</div>
        <div className="forecast-data">
          {days.map((i) => {
            return (
              <span className="forecast" key={i}>
                <span>
                  {date.getDay() + i + 1 < 7
                    ? dayName[date.getDay() + i + 1]
                    : dayName[date.getDay() + i - 6]}
                </span>
                <div>
                  {temp.min[i]} / {temp.max[i]}
                </div>
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    search();
    return "loading";
  }
}
