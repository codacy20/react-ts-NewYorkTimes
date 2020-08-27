import React, { Component } from "react";
import Search from "./search/Search";
import Expandable from "./expandable/Expandable";
import Tile from "./tile/Tile";
import "./styles.css";

export default class App extends Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <h1>Hello App</h1>
        <Search />
        <Expandable />
        <div>
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>
    );
  }
}
