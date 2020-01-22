import React, { Component } from "react";
import Carousel from "../Re-usable/Carousel/Carousel";
import Notification from "../Re-usable/Notification/Notification";
import Modal from "../Re-usable/Modal/Modal";
import ModalBackDrop from "../Re-usable/Modal/ModalBackDrop";
import Title from '../Re-usable/Title/Title';
import TitleAlt from '../Re-usable/Title/TitleAlt';
export default class Project extends Component {
  // Default props to pass into carousel component
  static defaultProps = {
    carOne: {
      name: "Ink City",
      github: "github.com/AaronMacken/INK-City-Website",
      link: "inkcity.herokuapp.com/",
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
      },
      modalData: {
        modalTitle: "Ink City",
        modalDescription: "Pinterest like application for tattoo lovers",
        modalBullets: [
          "Pulls in instagram posts of tattos using a third party API",
          "Has a friends list feature which is controlled from a RESTful API on the back-end",
          "Made with Node JS and Mongo DB."
        ]
      }
    },
    carTwo: {
      name: "Pomotron 9000",
      github: "github.com/AaronMacken/Pomotron-Singlepage",
      link: "pomotron9000.herokuapp.com/",
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
      },
      modalData: {
        modalTitle: "Pomotron 9000",
        modalDescription: "Application that allows users to track their study habits using the Pomodorro technique",
        modalBullets: [
          "Singlepage application that uses AJAX to make updates to the database without disrupting the document flow",
          "Includes a stopwatch made from javascript which modifies UX as it is used",
          "Made with Node JS, Mongo DB and jQuery"
        ]
      }
    }
  };

  // State for modal
  constructor(props) {
    super(props);

    this.state = {
      isShowingModal: false,
      modalData: {}
    };
    
    this.loadModalDataOne = this.loadModalDataOne.bind(this);
    this.loadModalDataTwo = this.loadModalDataTwo.bind(this);
 
}

  // load in data from default prop as modal state on load
  UNSAFE_componentWillMount() {
    this.setState({
      isShowingModal: false,
      modalData: this.props.carOne.modalData
    });
  }

  // method for displaying modal via state change
  // passed into carousel component's <img> tag for on click
  openModalHandler = () => {
    this.setState({
      isShowingModal: true
    });
  };

  // method for hiding modal via state change
  // passed into the backdrop component and the close button of the modal
  closeModalHandler = () => {
    this.setState({
      isShowingModal: false,
      modalData: this.props.carOne.modalData
    });
  };

  loadModalDataOne = () => {
    this.setState({
      isShowingModal: true,
      modalData: this.props.carOne.modalData
    });
  };

  loadModalDataTwo = () => {
    this.setState({
      isShowingModal: true,
      modalData: this.props.carTwo.modalData
    });
  };

  render() {
    return (
      <div>
        <ModalBackDrop
          show={this.state.isShowingModal}
          close={this.closeModalHandler}
        />
        <Modal
          className="modal"
          show={this.state.isShowingModal}
          close={this.closeModalHandler}
          modalData={this.state.modalData}
        ></Modal>
        <Title text="Freelance Projects" />
        <Carousel data={this.props.carOne} openModal={this.openModalHandler} loadNew={this.loadModalDataOne}/>
        <Carousel data={this.props.carTwo} openModal={this.openModalHandler} loadNew={this.loadModalDataTwo}/>
        
        <TitleAlt text="Practice Projects"/>
        <Carousel data={this.props.carOne} openModal={this.openModalHandler} loadNew={this.loadModalDataOne}/>
        <Carousel data={this.props.carTwo} openModal={this.openModalHandler} loadNew={this.loadModalDataTwo}/>
        <Notification />
      </div>
    );
  }
}
