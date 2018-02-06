import React, { Component } from "react";
import axios from "axios";
import "../../App.css";
import Favorite from "../fav/favorite";

export default class Thing extends Component {
  constructor() {
    super();
    this.state = {
      current: 1,
      poemData: [],
      title: "",
      author: "",
      lines: []
    };
    this.nextPoem = this.nextPoem.bind(this);
    this.pastPoem = this.pastPoem.bind(this);
    this.favorite = this.favorite.bind(this);
  }

  componentDidMount() {
    let num = Math.floor(Math.random() * 163);
    axios
      .get("/api/test")
      .then(result => {
        this.setState({
          poemData: result.data[0],
          title: result.data[0][num].title,
          author: result.data[0][num].author,
          lines: result.data[0][num].lines,
          current: num
        });
      })
      .catch(() => console.log("error"));

    console.log(this.state.poemData);
  }

  favorite(item) {
    // let fave = {
    //   title: this.state.title,
    //   author: this.state.author,
    //   lines: this.state.lines
    // };

    axios
      .post("/api/post", item)
      .then(result => console.log(result.data))
      .catch(() => console.log("fail"));
  }

  pastPoem() {
    let num = this.state.current;
    if (num <= 1) {
      return;
    } else {
      num--;
    }
    this.setState({
      title: this.state.poemData[0][num].title,
      author: this.state.poemData[0][num].author,
      lines: this.state.poemData[0][num].lines,
      current: num
    });
  }
  nextPoem() {
    let num = this.state.current;
    num++;
    this.setState({
      title: this.state.poemData[0][num].title,
      author: this.state.poemData[0][num].author,
      lines: this.state.poemData[0][num].lines,
      current: num
    });
    console.log(this.state.poemData);
    console.log(this.state.poemData.title);
  }

  render() {
    let poems = this.state.poemData.map((item, key) => {
      return (
        <div key={key} className="poem-card">
          <h1>{item.title}</h1>
          <h3>{item.author}</h3>
          <p>{item.lines}</p>
          <Favorite favorite={this.favorite} item={item} />
        </div>
      );
    });

    return (
      <div>
        <h1>PoetryDB</h1>
        <div className="row">{poems}</div>
      </div>
    );
  }
}
