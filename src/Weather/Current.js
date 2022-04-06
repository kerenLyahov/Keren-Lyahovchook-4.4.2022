import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Current.css";

export default function Current(props) {
  let key = props.data;
  const ApiKey = `RQdrnJyUpOMTZn7Sn8mVB4kLM4TFfKgz`;

  let [data, setData] = useState({
    ready: false,
    description: "",
    icon: "",
    temp: "",
  });

  function search() {
    let URL = `http://dataservice.accuweather.com//currentconditions/v1/${key}?apikey=${ApiKey}`;
    axios.get(URL).then(handleResponse);
  }
  function handleResponse(response) {
    setData({
      ready: true,
      description: response.data[0].WeatherText,
      icon: response.data[0].WeatherIcon,
      temp_c: response.data.Temperature.Metric.Value,
      temp_f: response.data.Temperature.Imperial.Value,
    });
  }

  let [temp, setTemp] = useState({
    faketemp: "15",
    temp: data.temp_c,
    unit: "°C",
  });
  function celsius() {
    setTemp({
      faketemp: "15",
      temp: data.temp_c,
      unit: "°C",
    });
  }
  function fahrenheit() {
    setTemp({
      faketemp: "33",
      temp: data.temp_f,
      unit: "°F",
    });
  }

  useEffect(() => {
    fahrenheit();
    celsius();
    search();
  }, [props]);
  if (data.ready) {
    return (
      <div className="current">
        <div className="cityName"> {props.name}</div>{" "}
        <div>
          <span className="temperature">
            {temp.faketemp}
            {temp.unit}
          </span>
          <div className="unit-btn">
            <button className="btn btn-primary btn-sm" onClick={celsius}>
              °C
            </button>{" "}
            <button className="btn btn-primary btn-sm" onClick={fahrenheit}>
              °F
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return (
      <div>
        <div>Loading</div>
      </div>
    );
  }
}
