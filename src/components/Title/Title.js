import React, { Component } from 'react'
import "./Title.css";

export default class Title extends Component {
    render() {

        const {text} = this.props;

        return (
            <div>
                <h2>{text}</h2>
            </div>
        )
    }
}
