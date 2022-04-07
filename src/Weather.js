import React, { useState } from "react";
import axios from "axios";
import APIdata from "./Weather/APIdata";
import Favorite from "./Favorite/Favorite";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({
    ready: false,
  });

  let [cityName, setCityName] = useState(props.city);

  let ApiKey = `RQdrnJyUpOMTZn7Sn8mVB4kLM4TFfKgz`;

  function search() {
    let URL = `http://dataservice.accuweather.com/locations/v1/search?q=${cityName}&apikey=${ApiKey}`;
    axios.get(URL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCityName(event.target.value);
  }

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      key: response.data[0].Key,
      name: response.data[0].EnglishName,
      c_temp: response.data[0].GeoPosition.Elevation.Metric.Value,
      f_temp: response.data[0].GeoPosition.Elevation.Imperial.Value,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-main">
        <form onSubmit={handleSubmit} className=" align-items-center form">
          <div className="form-group row align-items-center">
            <div className="col-sm-auto my-1">
              <input
                type="search"
                placeholder="Enter a city"
                onChange={updateCity}
                className="form-control search"
              />
            </div>
            <div className="col-auto my-1">
              <button type="submit" className="btn btn-primary submit-btn">
                Search
              </button>
            </div>
            <div className="col-auto my-1">
              <button type="submit" className="btn btn-link addToFavorite">
                ⭐
              </button>
            </div>
          </div>
        </form>
        <APIdata
          data={weatherData.key}
          apikey={ApiKey}
          name={weatherData.name}
        />
        <Favorite
          name={weatherData.name}
          cTemp={weatherData.c_temp}
          fTemp={weatherData.f_temp}
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
