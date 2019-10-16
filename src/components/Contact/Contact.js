import React, { Component } from "react";
import "./Contact.css";
import TitleAlt from "../Re-usable/Title/TitleAlt";
import ImageList from "../Re-usable/ImageList/ImageList";

export default class Contact extends Component {
  static defaultProps = {
    listDataOne: [
      {
        name: "253-449-6710",
        img: "/phone.png",
        height: "150px"
      },
      {
        name: "Aaron.A.Macken@gmail.com",
        img: "/email.png",
        height: "150px"
      },
      {
        name: "linkedin.com/in/aaronmacken/",
        img: "/linkedin.png",
        height: "150px"
      }
    ]
  }
  render() {
    const {listDataOne} = this.props;
    return (
      <div>
          <TitleAlt text="Contact Me"/>
          <div style={{marginTop: "4rem"}}></div>
          <ImageList listData={listDataOne}/>
      </div>
    );
  }
}
