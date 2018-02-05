import React, { Component } from "react";
import axios from "axios";
import "../../App.css";
import Thing from "../thing/thing";
import App from "../../App";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="head">
        <div id="Shake">
          <img
            src="http://www.sorodesign.com/img/dropcaps/ornament-zapfding3.gif"
            alt=""
          />
        </div>
        <span onClick={() => this.props.home()} id="nav">
          Home
        </span>
        <span onClick={() => this.props.poems()} id="nav">
          Poems
        </span>
        <span onClick={() => this.props.list()} id="nav">
          Favorites
        </span>
        <span onClick={() => this.props.addPoem()} id="nav">
          My Poems
        </span>
      </div>
    );
  }
}
