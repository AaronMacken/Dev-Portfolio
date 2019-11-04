import React, { Component } from "react";
import "./Contact.css";
import TitleAlt from "../Re-usable/Title/TitleAlt";
import Title from "../Re-usable/Title/Title";
import ImageList from "../Re-usable/ImageList/ImageList";
import ContactForm from "../Re-usable/ContactForm/ContactForm";
import Notification from "../Re-usable/Notification/Notification";

import ResponsiveLi from "../Re-usable/Navbar/ResponsiveLi";

export default class Contact extends Component {
  static defaultProps = {
    listDataOne: [
      {
        title: "Phone",
        copyText: "253-449-6710",
        img: "/phone.png",
        height: "150px"
      },
      {
        title: "Email",
        copyText: "Aaron.A.Macken@gmail.com",
        img: "/email.png",
        height: "150px"
      },
      {
        title: "LinkedIn",
        copyText: "linkedin.com/in/aaronmacken/",
        img: "/linkedin.png",
        height: "150px"
      }
    ]
  };

  render() {
    const { listDataOne } = this.props;
    return (
      <div>
        <div className="contactMarginTop"></div>
        <div className="title-subTitle-wrapper">
          <TitleAlt text="Contact Me" />
        </div>

        <div className="contactMargin"></div>

        <section className="contactInfo">
          <p className="tip">(Click to copy)</p>
          {/* Pass a copy prop into the list, which changes the type of list item that will be rendered */}
          <ImageList listData={listDataOne} copy />
        </section>

        <section className="contactForm">
          <Title text="Drop Me A Line" />
          <ContactForm />
        </section>

        {/* Notification div, displayed when state is modified by various components that use the notify method
          in the notification file */}
        <Notification />
      </div>
    );
  }
}
