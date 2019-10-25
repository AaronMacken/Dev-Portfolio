import React, { Component } from "react";
import "./ImageListItem.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class ImageListItem extends Component {
  render() {

    const { text, img, height, width, copy } = this.props;

    // if the component recieves a copy prop, render a component that will copy the text prop to clipboard when clicked
    // this is done with the react-copy-to-clipboard package
    // wrap the component in the CopyToClipboard component & assign text value to what will be copied when clicked

    var myLi;
    if (copy) {
      myLi =
        <CopyToClipboard text={text}>
          <li className="item">
            <h5 class="item-title">{text}</h5>
            <img
              className="item-img" height={height} width={width}
              src={require(`../../../../public${img}`)}
            ></img>
          </li>
        </CopyToClipboard>

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
