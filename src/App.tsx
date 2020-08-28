import React, { Component } from "react";
import Search from "./search/Search";
import Expandable from "./expandable/Expandable";
import Tile from "./tile/Tile";
import { basicRequestArticle, Article } from "./models/Response";
import "./styles.css";

export default class App extends Component<{}, basicRequestArticle> {
  selectedArticles: Article[] = [];

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
      .then((result: basicRequestArticle) => this.checkResult(result));
  }

  checkResult(results: basicRequestArticle) {
    results.results.forEach((item: Article) => {
      if (item.multimedia.length > 0) this.selectedArticles.push(item);
    });
    let newArr: Article[] = [];
    for (let index = 0; index < 3; index++) {
      const randomElement: Article = this.selectedArticles[
        Math.floor(Math.random() * this.selectedArticles.length)
      ];
      newArr.push(randomElement);
    }
    this.setState({ results: newArr, num_results: results.num_results });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello App</h1>
        <Search />
        <Expandable />
        <div>
          {this.state.results.map((item: Article, index: number) => (
            <Tile item={item} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
