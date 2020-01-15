import React, { Component } from "react";
import "./OrangeButton.css";

export default class OrangeButton extends Component {
  render() {
    const { text, big, onClick } = this.props;

    const biggerStyle = {
      width: "15rem",
      height: "4rem",
      fontSize: "130%"
    };

    return (
      <div>
        {big ? (
          <button className="orangeButton" style={biggerStyle} type="submit" onClick={onClick}>
            {text}
          </button>
        ) : (
          <button className="orangeButton" type="submit" onClick={onClick}>{text}</button>
        )}
      </div>
    );
  }
}
