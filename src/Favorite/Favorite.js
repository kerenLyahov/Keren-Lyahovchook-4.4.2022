import React, { useEffect, setState } from "react";
import update from "immutability-helper";

export default function Favorite() {
  let favor = [];
  let data = JSON.parse(window.localStorage.getItem("favorite"));

  useEffect(() => {
    favor.push(data);
  }, [data.weatherData.key]);

  return <div></div>;
}
