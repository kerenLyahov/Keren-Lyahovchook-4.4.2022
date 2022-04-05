import React, { useState } from "react";
import axios from "axios";
import Current from "./Weather/Current";
import Forecast from "./Weather/Forecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({
    ready: false,
    unit: "metric",
  });

  let [cityName, setCityName] = useState(props.city);

  const ApiKey = `RQdrnJyUpOMTZn7Sn8mVB4kLM4TFfKgz`;

  function search() {
    let URL = `http://dataservice.accuweather.com/locations/v1/search?q=${cityName}&apikey=${ApiKey}`;
    //axios.get(URL).then(handleResponse);
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
      displayCityname: response.data[0].EnglishName,
      key: response.data[0].Key,
      temperature: response.data[0].GeoPosition.Elevation,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="searchBody">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              onChange={updateCity}
            />
            <input type="submit" className="searchButton" value="search" />
          </form>
        </div>
        <Current data={weatherData.temperature} />
        <Forecast data={weatherData.key} />
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
