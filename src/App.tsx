import React, { Component } from "react";
import Search from "./search/Search";
import Expandable from "./expandable/Expandable";
import Tile from "./tile/Tile";
import { basicRequestEmailedArticle, EmailedArticle } from "./models/Response";
import "./styles.scss";

export default class App extends Component<{}, basicRequestEmailedArticle> {
  selectedArticles: EmailedArticle[] = [];

  constructor(props: any) {
    super(props);
    // Don't call this.setState() here!
    this.state = { num_results: 0, results: [] };
  }
  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=vodyeykmBd5eNVqEx2GesHtIpocrXqWq"
    )
      .then((response) => response.json())
      .then((result: basicRequestEmailedArticle) => this.checkResult(result));
  }

  checkResult(results: basicRequestEmailedArticle) {
    results.results.forEach((item: EmailedArticle) => {
      if (item.media && item.media.length > 0) this.selectedArticles.push(item);
    });
    let newArr: EmailedArticle[] = [];
    for (let index = 0; index < 3; index++) {
      const randomElement: EmailedArticle = this.selectedArticles[
        Math.floor(Math.random() * this.selectedArticles.length)
      ];
      newArr.push(randomElement);
    }
    this.setState({ results: newArr, num_results: results.num_results });
  }

  render() {
    return (
      <div className="App">
        <Search />
        <Expandable />
        <div className="tiles-container">
          {this.state.results.map((item: EmailedArticle, index: number) => (
            <Tile item={item} key={index} />
          ))}
        </div>
        <div
          className="love"
          onClick={() =>
            window.open("https://mobile.twitter.com/RT_Amir", "_blank")
          }
        >
          <span>Made with</span>
          <span className="material-icons">favorite</span>
          <span>by amir</span>
        </div>
        <div className="credit">
          <span>Made using nytimes public api</span>
        </div>
      </div>
    );
  }
}
