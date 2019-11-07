import React, { Component } from 'react'
import Carousel from "../Re-usable/Carousel/Carousel";
import Notification from "../Re-usable/Notification/Notification";
import Modal from "../Re-usable/Modal/Modal";
import ModalBackDrop from "../Re-usable/Modal/ModalBackDrop";
export default class Project extends Component {
    // Default props to pass into carousel component
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

    // State for modal
    constructor(props) {
        super(props);

        this.state = {
            isShowingModal: false
        }
    }
    // method for displaying modal via state change
    // passed into carousel component's <img> tag for on click
    openModalHandler = () => {
        this.setState({
            isShowingModal: true
        });
    }

    // method for hiding modal via state change
    // passed into the backdrop component and the close button of the modal
    closeModalHandler = () => {
        this.setState({
          isShowingModal: false
        });
      }

    render() {
        return (
            <div>
                <ModalBackDrop show={this.state.isShowingModal} close={this.closeModalHandler} />
                <Modal className="modal" show={this.state.isShowingModal} close={this.closeModalHandler}></Modal>
                <Carousel data={this.props.carOne} openModal={this.openModalHandler} />
                <Carousel data={this.props.carTwo} openModal={this.openModalHandler} />
                <Notification />
            </div>
        )
    }
}
