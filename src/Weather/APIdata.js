import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayWeather from "./DisplayWeather";

export default function APIdata(props) {
  let key = props.data;
  let days = [0, 1, 2, 3, 4];
  let [forecast, setForecast] = useState({
    ready: false,
  });
  let [data, setData] = useState({
    ready: false,
    description: "",
    icon: "",
    temp: "",
  });

  function search() {
    let currentURL = `http://dataservice.accuweather.com//currentconditions/v1/${key}?apikey=${props.apikey}`;
    let forecastURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${props.apikey}`;
    axios.get(forecastURL).then(handleForecastResponse);
    axios.get(currentURL).then(handleCurrentResponse);
  }
  function handleCurrentResponse(response) {
    setData({
      ready: true,
      description: response.data[0].WeatherText,
      icon: response.data[0].WeatherIcon,
      temp_c: response.data[0].Temperature.Metric.Value,
      temp_f: response.data[0].Temperature.Imperial.Value,
    });
  }
  function handleForecastResponse(response) {
    //the API returns only farenhait value. since we would like the
    //first display to be celsius, we need to transform the data
    //with the formula (°C -32)*5/9 = °F
    setForecast({
      ready: true,
      max: days.map((i) => {
        return Math.round(
          ((response.data.DailyForecasts[i].Temperature.Maximum.Value - 32) *
            5) /
            9
        );
      }),
      min: days.map((i) => {
        return Math.round(
          ((response.data.DailyForecasts[i].Temperature.Minimum.Value - 32) *
            5) /
            9
        );
      }),
    });
  }
  useEffect(() => {
    search();
  }, [props.name]);
  if (data.ready && forecast.ready) {
    return (
      <div className="current">
        <DisplayWeather
          name={props.name}
          min={forecast.min}
          max={forecast.max}
          current={data}
        />
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
