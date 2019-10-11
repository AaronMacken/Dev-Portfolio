import React, { Component } from 'react'
import "./ContentContainer.css";

export default class ContentContainer extends Component {
    render() {
        const {content} = this.props;
        const paragraphs = this.props.content.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))
        return (
            <div className="contentContainer">
                <h5>{content.head}</h5>
                {paragraphs}
            </div>
        )
    }
}
