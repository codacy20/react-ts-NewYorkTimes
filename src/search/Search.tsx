import React, { Component } from "react";
import "./Search.scss";

export default class Search extends Component<{}, {}> {
  render() {
    return (
      <div>
        <span>Search works!</span>
        <input type="text" placeholder="Describe your issue" />
      </div>
    );
  }
}
