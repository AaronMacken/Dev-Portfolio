import React, { Component } from "react";
import "./ImageListItem.css";

export default class ImageListItem extends Component {
  render() {

    const {text, img, height, width} = this.props;

    return (
      <li className="item">
        <h5 class="item-title">{text}</h5>
        <img
          className="item-img" height={height} width={width}
          src={require(`../../../../public${img}`)}
        ></img>
      </li>
    );
  }
}
