import React, { Component } from "react";
import axios from "axios";
import thing from "../thing/thing";
export default class Favorite extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: []
  //   };
  // }
  favorite = () => {
    let fave = {
      title: this.props.title,
      author: this.props.author,
      lines: this.props.lines
    };

    axios
      .post("/api/post", fave)
      .then(result => console.log(result.data))
      .catch(() => console.log("fail"));

    console.log();
  };
  render() {
    return <button onClick={() => this.favorite()}>Favorite</button>;
  }
}
