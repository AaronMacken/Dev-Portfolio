import React, { Component } from 'react'
import styled from "styled-components";
import ee from "event-emitter";

const initialState = {
    top: -100,
    notificationText: "",
    fontAwesomeName: ""
}

// this component creates a styled.div which is used as a template
// it is given state of -100, to translate 100px off of the page
// and two empty fields to store the display text and the class name for the font awesome icon

// the notify event is exported to files that need to display a notification
// it takes two args, which set the state for the display text of the component
// this data is passed through the function calls and setState is ultimately called to translate the div
// onto the page with the display text passed into the function

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

// notify event
export const notify = (notificationText, fontAwesomeName) => {
    emitter.emit('notification', notificationText, fontAwesomeName)
}


export default class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
        // used for clearing notification timeout
        this.timeout = null;
        // listener for a 'notification' even, triggered by the notify function
        // calls the on show method with the passed in data
        emitter.on('notification', (notificationText, fontAwesomeName) => {
            this.onShow(notificationText, fontAwesomeName)
        });
    }
    
    // on show first clears any timeout and sets state to initial values to 'reset' the animation
    // show notification is then called with the passed in data
    onShow = (notificationText, fontAwesomeName) => {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.setState(initialState, () => {
                this.timeout = setTimeout(() => {
                    this.showNotification(notificationText, fontAwesomeName);
                }, 500)
            })
        } else {
            this.showNotification(notificationText, fontAwesomeName);
        }
    }

    // showNotification is called with the passed in data to modify the state of the component
    // thus display the component on the screen with the appropriate passed in text and icon class name
    showNotification = (notificationText, fontAwesomeName) => {
        this.setState({
            top: 16,
            notificationText: notificationText,
            fontAwesomeName: fontAwesomeName
        }, () => {
            this.timeout = setTimeout(() => {
                this.setState(initialState)
            }, 3000)
        });
    }

    render() {
        const { notificationText, fontAwesomeName } = this.state;
        return (
            <div>
                <Container top={this.state.top}>{notificationText}<i className={fontAwesomeName}></i></Container>
            </div>
            
        )
    }
}
