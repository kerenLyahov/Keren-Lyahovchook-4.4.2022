import React from "react";
import axios from "axios";

export default function New(props) {
  //console.log(props.data);
  let id = props.data.AdministrativeArea.ID;
  let name = props.data.AdministrativeArea.EnglishName;
  let key = props.data.Key;
  const ApiKey = `RQdrnJyUpOMTZn7Sn8mVB4kLM4TFfKgz`;
  let URL = `http://dataservice.accuweather.com//currentconditions/v1/${key}?apikey=${ApiKey}`;
  //let URL = `http://www.accuweather.com/en/${id}/${name}/${key}/current-weather/${key}?lang=en-us`;
  axios.get(URL).then(handleResponse);

  function handleResponse(response) {
    console.log(response);
  }
  console.log(URL);
  return <div>adkfljad</div>;
}
