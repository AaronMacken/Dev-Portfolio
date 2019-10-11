import React, { Component } from "react";
import "./PurpleButton.css";
import { sign } from "crypto";

export default class PurpleButton extends Component {
  render() {
    const { text, big } = this.props;

    const biggerStyle = {
        letterSpacing: "1px",
        fontSize: "120%",
        fontWeight: "500",
        width: "15rem",
        height: "4rem",
        fontSize: "130%"
    }

    return (
      <div>
        {big ? (
          <button className="purpleButton" style={biggerStyle} >{text}</button>
        ) : (
          <button className="purpleButton">{text}</button>
        )}
      </div>
    );
  }
}
