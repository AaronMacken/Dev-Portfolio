import React, { Component } from 'react'
import Carousel from "../Re-usable/Carousel/Carousel";

export default class Project extends Component {
    static defaultProps = {
        carOne: {
            name: "Ink City",
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
            </div>
        )
    }
}
