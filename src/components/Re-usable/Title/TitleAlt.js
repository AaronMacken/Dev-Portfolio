import React, { Component } from "react";
import "./TitleAlt.css";

export default class TitleAlt extends Component {
  render() {
    const { text } = this.props;

    return (
      <div>
        <h2 className="titleAlt" id="myTitle">
          {text}
        </h2>
      </div>
    );
  }
}
