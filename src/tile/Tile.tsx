import React, { Component } from "react";
import { EmailedArticle } from "../models/Response";
import "./Tile.scss";

export default class Tile extends Component<{ item: EmailedArticle }, {}> {
  navigate() {
    window.open(this.props.item.url, "_blank");
  }

  render() {
    return (
      <div
        className="tile-container"
        style={{
          backgroundImage: `url(${this.props.item.media[0]["media-metadata"][1].url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
        onClick={this.navigate.bind(this)}
      >
        <div className="marquee">
          <span className="inner">{this.props.item.title}</span>
        </div>
      </div>
    );
  }
}
