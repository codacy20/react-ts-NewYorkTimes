import React, { Component } from "react";
import "./Search.scss";

export default class Search extends Component<{}, {}> {
  constructor(props: any) {
    super(props);
    // Don't call this.setState() here!
    this.state = { num_results: 0, results: [] };
    // this.getData.bind(this);
  }
  onKeyUp(event: React.FormEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    this.getData(newValue);
  }

  getData(newValue: string) {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?facet=false&q=${newValue}&sort=relevance&api-key=vodyeykmBd5eNVqEx2GesHtIpocrXqWq`
    )
      .then((response) => response.json())
      .then((result: any) => this.checkResult(result));
  }

  checkResult(result: any) {
    console.log(result);
  }

  render() {
    return (
      <div>
        <span>Search works!</span>
        <input
          type="text"
          placeholder="Describe your issue"
          onKeyUp={this.onKeyUp.bind(this)}
        />
      </div>
    );
  }
}
