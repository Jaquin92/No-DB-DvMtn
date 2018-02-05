import React, { Component } from "react";
import "../../App.css";
import Thing from "../thing/thing";
import axios from "axios";

export default class AddPoem extends Component {
  constructor() {
    super();
    this.state = {
      newTitle: "",
      newAuthor: "",
      newLines: "",
      newPoems: [],
      change: true,
      lineChange: ""
    };
    this.addP = this.addP.bind(this);
    this.editPoem = this.editPoem.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/getNew")
      .then(
        result => this.setState({ newPoems: result.data }),
        console.log("success")
      );
  }

  addP(title, author, lines) {
    if (this.state.newTitle === "") {
      alert("Please enter a Title");
      return;
    }
    if (this.state.newAuthor === "") {
      alert("Please enter an Author");
      return;
    }
    if (this.state.newLines === "") {
      alert("Please enter a Poem");
      return;
    }

    let poem = {
      title: this.state.newTitle,
      author: this.state.newAuthor,
      lines: this.state.newLines
    };
    axios
      .post("/api/postPoem", poem)
      .then(
        result => this.setState({ newPoems: result.data }),
        console.log("success")
      );
    console.log(this.state.newPoems);
  }

  editPoem(poem) {
    axios
      .put(`/api/edit/${poem}`, { edit: this.state.lineChange })
      .then(result => this.setState({ newPoems: result.data }));
    console.log(poem.title);
  }

  render() {
    let poems = this.state.newPoems.map((item, key) => {
      return (
        <div key={key} className="poem-card">
          <h1>Author:{item.title}</h1>
          <h3>Title:{item.author}</h3>
          <p>{item.lines}</p>
          <br />
          <br />
          <input
            type="text"
            onChange={e => this.setState({ lineChange: e.target.value })}
          />{" "}
          <button onClick={() => this.editPoem(key)}>Edit Poem</button>
        </div>
      );
    });

    return (
      <div>
        <h1>My Poems</h1>

        <div className="mainDiv">
          <div>
            <h1>Title</h1>
            <input
              className="authorBox"
              type="text"
              name="Author"
              id=""
              onChange={e => {
                this.setState({ newAuthor: e.target.value });
                console.log(this.state.newAuthor);
              }}
            />
          </div>

          <div>
            <h1>Author</h1>
            <input
              className="titleBox"
              type="text"
              name="Title"
              id=""
              onChange={e => {
                this.setState({ newTitle: e.target.value });
              }}
            />
          </div>

          <div className="postBoxDiv">
            <h1>Poem</h1>
            <input
              className="postBox"
              type="text"
              name="Lines"
              id=""
              onChange={e => {
                this.setState({ newLines: e.target.value });
              }}
            />
          </div>
        </div>
        <button onClick={this.addP}>Add Poem</button>

        <div className="row">{poems}</div>
      </div>
    );
  }
}
