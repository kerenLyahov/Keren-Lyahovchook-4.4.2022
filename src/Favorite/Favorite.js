import React, { useEffect, setState } from "react";
import update from "immutability-helper";

export default function Favorite() {
  let favor = [];
  let data = JSON.parse(window.localStorage.getItem("favorite"));

  //whenever the data will change, it will create a new child in the favorite array.

  // useEffect(() => {
  //   favor.push(data);
  // }, [data]);

  return <div></div>;
}
