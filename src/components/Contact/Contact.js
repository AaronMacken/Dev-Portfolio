import React, { Component } from "react";
import "./Contact.css";
import TitleAlt from "../Re-usable/Title/TitleAlt";
import ImageList from "../Re-usable/ImageList/ImageList";

export default class Contact extends Component {
  static defaultProps = {
    listDataOne: [
      {
        name: "React",
        img: "/react.svg",
        height: "150px"
      },
      {
        name: "Redux",
        img: "/redux.png",
        height: "150px"
      },
      {
        name: "Mongo",
        img: "/mongo.png",
        height: "150px"
      }
    ]
  }
  render() {
    const {listDataOne} = this.props;
    return (
      <div>
          <TitleAlt text="Contact Me"/>
          <ImageList listData={listDataOne}/>
      </div>
    );
  }
}
