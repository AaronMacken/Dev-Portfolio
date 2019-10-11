import React, { Component } from "react";
import "./SubTitle.css";

export default class SubContent extends Component {
  render() {
      
    const { head, body } = this.props;

    return (
      <div className="SubContent--contentWrapper">
        <h5 className="SubContent--contentWrapper__head">{head}</h5>
        <p className="SubContent--contentWrapper__body">{body}</p>
      </div>
    );
  }
}
