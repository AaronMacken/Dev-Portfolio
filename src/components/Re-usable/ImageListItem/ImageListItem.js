import React, { Component } from "react";
import "./ImageListItem.css";

export default class ImageListItem extends Component {
  render() {

    const { text, img, height, width, click } = this.props;



    var myLi;
    if (click) {
      myLi =
        <li className="item" onClick={() => console.log(`${text} done been clicked fam... shoot`)}>
          <h5 class="item-title">{text}</h5>
          <img
            className="item-img" height={height} width={width}
            src={require(`../../../../public${img}`)}
          ></img>
        </li>
    } else {
      myLi =
      <li className="item">
        <h5 class="item-title">{text}</h5>
        <img
          className="item-img" height={height} width={width}
          src={require(`../../../../public${img}`)}
        ></img>
      </li>
    }
    return (
      <div>{myLi}</div>
    )
  }
}
