import React, { Component } from "react";
import "./Contact.css";
import TitleAlt from "../Re-usable/Title/TitleAlt";
import ImageList from "../Re-usable/ImageList/ImageList";

export default class Contact extends Component {
  render() {
    return (
      <div>
          <TitleAlt text="Contact Me"/>
          <ImageList />
      </div>
    );
  }
}
