import React, { Component } from "react";
import Search from "./search/Search";
import Expandable from "./expandable/Expandable";
import Tile from "./tile/Tile";
import { basicRequest, Result } from "./models/Response";
import "./styles.css";

export default class App extends Component<{}, basicRequest> {
  constructor(props: any) {
    super(props);
    // Don't call this.setState() here!
    this.state = { results: [], num_results: 0 };
  }
  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=vodyeykmBd5eNVqEx2GesHtIpocrXqWq"
    )
      .then((response) => response.json())
      .then((result: basicRequest) => this.setState(result));
    this.state.results.forEach((item: Result) => {});
  }

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
