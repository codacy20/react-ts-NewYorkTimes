import React, { Component } from "react";
import { Article, basicRequestArticle } from "../models/Response";
import "./Expandable.scss";

export default class Expandable extends Component<{}, basicRequestArticle> {
  constructor(props: any) {
    super(props);
    // Don't call this.setState() here!
    this.state = { results: [], num_results: 0 };
  }
  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vodyeykmBd5eNVqEx2GesHtIpocrXqWq"
    )
      .then((response) => response.json())
      .then((result: basicRequestArticle) => this.setState(result));
  }
  navigate(item: Article) {
    window.open(item.url, "_blank");
  }

  render() {
    return (
      <div className="expandables-container">
        <div className="wrapper">
          {this.state.results.map((item: Article, index: number) => (
            <div
              key={index}
              className="expandable-item"
              onClick={() => this.navigate(item)}
            >
              <span>{item.title}</span>
              <span className="material-icons">chevron_right</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
