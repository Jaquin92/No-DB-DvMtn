import React, { Component } from "react";
//import axios from "axios";
import "./App.css";
import Thing from "./component/thing/thing";
import Header from "./component/header/header";
import Home from "./component/home/home";
import AddPoem from "./component/addPoem/addPoem";
import List from "./component/list/list";

class App extends Component {
  constructor() {
    super();
    this.state = {
      home: true,
      list: false,
      poems: false,
      addPoem: false
    };
    this.home = this.home.bind(this);
    this.list = this.list.bind(this);
    this.addPoem = this.addPoem.bind(this);
    this.poems = this.poems.bind(this);
  }

  home() {
    this.setState({
      home: true,
      list: false,
      addPoem: false,
      poems: false
    });
  }
  list() {
    this.setState({
      home: false,
      list: true,
      addPoem: false,
      poems: false
    });
  }
  addPoem() {
    this.setState({
      home: false,
      list: false,
      addPoem: true,
      poems: false
    });
  }
  poems() {
    this.setState({
      home: false,
      list: false,
      addPoem: false,
      poems: true
    });
  }

  render() {
    return (
      <div>
        <Header
          home={this.home}
          list={this.list}
          addPoem={this.addPoem}
          poems={this.poems}
        />

        {this.state.home && <Home />}
        {this.state.poems && <Thing />}
        {this.state.addPoem && <AddPoem />}
        {this.state.list && <List />}
      </div>
    );
  }
}

export default App;
