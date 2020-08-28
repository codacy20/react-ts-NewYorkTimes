import React, { Component } from "react";
import { SearchResponse, ISearchResponse, IDoc } from "./../models/Response";
import "./Search.scss";

export default class Search extends Component<{}, ISearchResponse> {
  constructor(props: any) {
    super(props);
    // Don't call this.setState() here!
    this.state = { docs: [] };
  }

  onKeyUp(event: React.FormEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    if (newValue.length >= 4) this.getData(newValue);
    if (newValue.length < 4) this.setState({ docs: [] });
  }

  getData(newValue: string) {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?facet=false&q=${newValue}&sort=relevance&api-key=vodyeykmBd5eNVqEx2GesHtIpocrXqWq`
    )
      .then((response) => response.json())
      .then((result: SearchResponse) => this.checkResult(result));
  }

  navigate(item: IDoc) {
    window.open(item.web_url, "_blank");
  }

  checkResult(result: SearchResponse) {
    this.setState(result.response);
  }

  render() {
    let results = null;
    if (this.state.docs.length > 0)
      results = (
        <div className="result">
          {this.state.docs.map((item: IDoc, index: number) => (
            <span onClick={() => this.navigate(item)}>
              {item.headline.main}
            </span>
          ))}
        </div>
      );
    return (
      <div className="search-container">
        <span className="title">Find the news that matters to you!</span>
        <div className="searchbox">
          <div className="searchbox-inner">
            <span className="material-icons">search</span>
            <input
              type="text"
              placeholder="Look up a topic"
              onKeyUp={this.onKeyUp.bind(this)}
            />
          </div>
          {results}
        </div>
      </div>
    );
  }
}
