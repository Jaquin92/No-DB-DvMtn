import React, { Component } from "react";
import axios from "axios";
import thing from "../thing/thing";

const Favorite = props => {
  return <button onClick={() => props.favorite(props.item)}>Favorite</button>;
};

export default Favorite;
