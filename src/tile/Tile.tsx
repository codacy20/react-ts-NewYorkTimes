import React, { Component } from "react";
import { Article } from "../models/Response";
import "./Tile.scss";

export default class Tile extends Component<{ item: Article }, {}> {
  render() {
    return (
      <div>
        <span>Tile works! {this.props.item.title}</span>
      </div>
    );
  }
}
