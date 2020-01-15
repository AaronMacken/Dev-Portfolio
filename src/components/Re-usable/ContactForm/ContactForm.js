import React, { Component } from "react";
import "./ContactForm.css";
import OrangeButton from "../Buttons/OrangeButton/OrangeButton";
import axios from 'axios';
import {notify} from "../Notification/Notification";


// initial state for the form
const initialState = {
  name: "",
  company: "",
  email: "",
  message: ""
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  // generic method that will update form state based off of which element is being modified
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // form submit method
  // gets data from form state
  // makes an axios request to the backend with form data
  // resets form data to initial values
  handleSubmit = e => {
    e.preventDefault();
    const messageData = this.state;
    // http://localhost:3001 -> dev
    // /nodeMailer -> proxied
    axios.post('/nodeMailer', { messageData })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    this.setState(initialState);
    // call the notify method which translates a fixed div onto the page
    // the params set the state for that notification's display text
    notify("Thanks", "fas fa-paper-plane");
  };


  render() {
    // vars for form state
    const { name, company, email, message } = this.state;

    return (
      <div>
        <form
          className="columnForm"
          onSubmit={this.handleSubmit}
        >
          <div className="inputRow">
            <input
              type={"text"}
              name={"name"}
              placeholder={"Full Name"}
              value={name}
              className="myInput"
              onChange={this.handleChange}
              required
            ></input>
            <input
              type={"text"}
              name={"company"}
              placeholder={"Company"}
              value={company}
              className="myInput"
              onChange={this.handleChange}
              required
            ></input>
            <input
              type={"email"}
              name={"email"}
              placeholder={"Email"}
              value={email}
              className="myInput"
              onChange={this.handleChange}
              required
            ></input>
          </div>
          <textarea
            className="myTextArea"
            placeholder="message"
            name="message"
            value={message}
            onChange={this.handleChange}
            required
          ></textarea>
          <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
            <OrangeButton text={"Submit"} submit />
          </div>
        </form>
      </div>
      
    );
  }
}
