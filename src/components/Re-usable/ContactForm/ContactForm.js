import React, { Component } from "react";
import "./ContactForm.css";
import OrangeButton from "../Buttons/OrangeButton/OrangeButton";
import axios from 'axios';
import styled from "styled-components";


// Container component for form submit notification
const Container = styled.div`
    background-color: #380af2ce;
    border: 1px solid #380af2ce;
    border-radius: 5px;
    color: white;
    padding: 16px;
    position: fixed;
    top: ${props => props.top}px;
    right: 16px;
    z-index: 999;
    transition: top .5s ease;
    > i {
        margin-left: 8px;
    }
`;

// initial state for the form
const initialState = {
  name: "",
  company: "",
  email: "",
  message: "",
  top: -100
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    // used for clearing notification timeout
    this.timeout = null;
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

    axios.post('http://localhost:3001/nodeMailer', { messageData })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    this.setState(initialState);
  };

  // passed to the submit button to call the showNotfication function
  // also handles clearing timeouts in the case that the button was clicked multiple times
  // by resetting the timeout var
  onShow = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.setState(initialState, () => {
        this.timeout = setTimeout(() => {
          this.showNotification();
        }, 500)
      })
    } else {
      this.showNotification();
    }
  }

  // function to show the notification div
  // sets state from -100px to 16px from the top of the page
  // assigns timeout variable to a set timeout function, which will call setState again
  // to hide the div back to its original position
  showNotification = () => {
    this.setState({
      top: 16
    }, () => {
      this.timeout = setTimeout(() => {
        this.setState(initialState)
      }, 3000)
    });
  }

  render() {
    // vars for form state
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
            <OrangeButton text={"Submit"} submit onClick={this.onShow}/>
          </div>
        </form>
        <Container top={this.state.top}>Thanks!<i className="fas fa-paper-plane"></i></Container>
      </div>
      
    );
  }
}
