import React, { Component } from 'react'
import "./ContactForm.css";
import OrangeButton from "../Buttons/OrangeButton/OrangeButton"

export default class ContactForm extends Component {

    // This component renders a number of inputs and a button that is passed in from a prop called contactFormData
    // this is an object that has two properties
    // the first property is buttonText, which holds the text for the button
    // and an array of objects that have the text for the input and the type of input that will be rendered
    // the correct number of inputs are then rendered based on what was passed in from the parent

    render() {
        const {contactFormData} = this.props;
        const inputs = contactFormData.inputs.map((inputItem, index) => {
            return (
                <input placeholder={inputItem.name} type={inputItem.type} required className="myInput"></input>
            )
        })
        return (
            <div>
                <form className="columnForm">
                    {inputs}
                    <div style={{marginTop: "2rem", marginBottom: "3rem"}}>
                        <OrangeButton text={contactFormData.buttonText}/>
                    </div>
                    
                </form>
            </div>
        )
    }
}
