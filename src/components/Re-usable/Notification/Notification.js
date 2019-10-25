import React, { Component } from 'react'
import styled from "styled-components";
import ee from "event-emitter";

const initialState = {
    top: -100,
    msg: ''
}

// The code uses the event-emitter package to make this notification accessible throughout the entire application
// I'm not entirely sure how the syntax for event emitter actually works.. but I know that you can simply call the notify function
// and pass a message argument to it to create a notification

// this component will take a notificationText prop and an icon prop
// notificationText will be what text the notification displays
// the icon prop will be the font awesome icon className 

// this notification is now completely re-useable!

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

const emitter = new ee();

export const notifyMail = (msg) => {
    emitter.emit('notificationMail', msg)
}
export const notifyCopy = (msg) => {
    emitter.emit('notificationCopy', msg);
}

export default class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            top: -100,
            msg: ''
        }
        // used for clearing notification timeout
        this.timeout = null;
        emitter.on('notificationMail', (msg) => {
            this.onShow(msg)
        });
        emitter.on('notificationCopy', (msg) => {
            this.onShow(msg)
        });
    }
    // passed to the submit button to call the showNotfication function
    // also handles clearing timeouts in the case that the button was clicked multiple times
    // by resetting the timeout var
    onShow = (msg) => {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.setState(initialState, () => {
                this.timeout = setTimeout(() => {
                    this.showNotification(msg);
                }, 500)
            })
        } else {
            this.showNotification(msg);
        }
    }

    // function to show the notification div
    // sets state from -100px to 16px from the top of the page
    // assigns timeout variable to a set timeout function, which will call setState again
    // to hide the div back to its original position
    showNotification = (msg) => {
        this.setState({
            top: 16,
            msg
        }, () => {
            this.timeout = setTimeout(() => {
                this.setState(initialState)
            }, 3000)
        });
    }

    render() {
        const {notificationText, icon} = this.props;
        return (
           <Container top={this.state.top}>{notificationText}<i className={icon}></i></Container>
        )
    }
}
