import React, { Component } from 'react'
import Carousel from "../Re-usable/Carousel/Carousel";
import Notification from "../Re-usable/Notification/Notification";
export default class Project extends Component {
    static defaultProps = {
        carOne: {
            name: "Ink City",
            github: "https://github.com/AaronMacken/INK-City-Website",
            link: "http://inkcity.herokuapp.com/",
            id: "1",
            img1: {
                src: "./devport-photos/ink1.png",
                alt: "InkCity Landing"
            },
            img2: {
                src: "./devport-photos/ink2.png",
                alt: "InkCity API"
            },
            img3: {
                src: "./devport-photos/ink3.png",
                alt: "InkCity Friends Feature"
            }
        },
        carTwo: {
            name: "Pomotron 9000",
            github: "https://github.com/AaronMacken/Pomotron-Singlepage",
            link: "http://pomotron9000.herokuapp.com/",
            id: "2",
            img1: {
                src: "./devport-photos/pom1.png",
                alt: "Pomotron Page"
            },
            img2: {
                src: "./devport-photos/pom2.png",
                alt: "Pomotron Create Task"
            },
            img3: {
                src: "./devport-photos/pom3.png",
                alt: "Pomotron Completed Task"
            }
        }
    }
    render() {
        return (
            <div>
                <Carousel data={this.props.carOne}/>
                <Carousel data={this.props.carTwo}/>
                <Notification/>
            </div>
        )
    }
}
