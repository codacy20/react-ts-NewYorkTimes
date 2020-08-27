import React, { Component } from "react";
import { Result, basicRequest } from "../models/Response";
import "./Expandable.scss";

export default class Expandable extends Component<{}, basicRequest> {
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
  }

  render() {
    // const { results } = this.state;
    // console.log(results);
    return (
      <div>
        <span>Expandable works!</span>
      </div>
    );
  }
}
