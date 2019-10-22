import React, { Component } from "react";
import "./ContactForm.css";
import OrangeButton from "../Buttons/OrangeButton/OrangeButton";
import axios from 'axios';

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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const messageData = this.state;

    axios.post('http://localhost:3001/nodeMailer', {messageData})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    this.setState(initialState);
  };

  render() {
    const { name, company, email, message } = this.state;

    return (
      <div>
        <form
          className="columnForm"
          onSubmit={this.handleSubmit}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type={"text"}
              name={"name"}
              placeholder={"Full Name"}
              value={name}
              className="myInput"
              onChange={this.handleChange}
            ></input>
            <input
              type={"text"}
              name={"company"}
              placeholder={"Company"}
              value={company}
              className="myInput"
              onChange={this.handleChange}
            ></input>
            <input
              type={"email"}
              name={"email"}
              placeholder={"Email"}
              value={email}
              className="myInput"
              onChange={this.handleChange}
            ></input>
          </div>
          <textarea
            className="myTextArea"
            placeholder="message"
            name="message"
            value={message}
            onChange={this.handleChange}
          ></textarea>
          <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
            <OrangeButton text={"Submit"} submit />
          </div>
        </form>
      </div>
    );
  }
}
