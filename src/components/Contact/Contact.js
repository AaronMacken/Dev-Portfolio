import React, { Component } from "react";
import "./Contact.css";
import TitleAlt from "../Re-usable/Title/TitleAlt";
import Title from "../Re-usable/Title/Title";
import ImageList from "../Re-usable/ImageList/ImageList";
import ContactForm from "../Re-usable/ContactForm/ContactForm";

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
    ],
    contactFormData: {
      buttonText: "Submit",
      inputs: [
        {
          name: "Full Name",
          type: "text"
        },
        {
          name: "Email Address",
          type: "email"
        },
        {
          name: "Company",
          type: "text"
        },
        {
          name: "Message",
          type: "text"
        },
      ]
    }
  }
  render() {
    const {listDataOne, contactFormData} = this.props;
    return (
      <div>
          <TitleAlt text="Contact Me"/>
          <div style={{marginTop: "4rem"}}></div>
          <ImageList listData={listDataOne}/>

          <Title text="Drop Me A Line"/> 
          <ContactForm contactFormData={contactFormData}/>
      </div>
    );
  }
}
