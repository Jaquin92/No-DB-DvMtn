import React, { Component } from "react";
import Favorite from "../fav/favorite";
import axios from "axios";
import "../../App.css";
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.deletePoem = this.deletePoem.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/fav")
      .then(result =>
        this.setState({
          list: result.data
        })
      )
      .catch(() => console.log("error"));
  }

  deletePoem(poem) {
    axios
      .delete(`/api/delete/${poem.title}`)
      .then(result => this.setState({ list: result.data }))
      .catch(() => console.log("delete error"));
  }

  render() {
    let poems = this.state.list.map((item, key) => {
      return (
        <div key={key} className="poem-card">
          <h1>{item.title}</h1>
          <h3>{item.author}</h3>
          <p>{item.lines}</p>
          <button onClick={() => this.deletePoem(item)}>Delete</button>
        </div>
      );
    });
    return (
      <div>
        <h1>Favorites</h1>
        <div className="row">{poems}</div>
      </div>
    );
  }
}
