import React, { Component } from "react";
import Carousel from "../Re-usable/Carousel/Carousel";
import Notification from "../Re-usable/Notification/Notification";
import Modal from "../Re-usable/Modal/Modal";
import ModalBackDrop from "../Re-usable/Modal/ModalBackDrop";
import Title from '../Re-usable/Title/Title';
import TitleAlt from '../Re-usable/Title/TitleAlt';
import SubTitle from '../Re-usable/SubTitle/SubTitle';
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
          "Made with Node JS and Mongo DB"
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
    },
    carThree: {
      name: "Hippie House e-Commerce",
      github: "github.com/AaronMacken/e-Commerce-Front",
      link: "hippie-house-am.herokuapp.com",
      id: "3",
      img1: {
        src: "./devport-photos/hou1.png",
        alt: "Landing Page"
      },
      img2: {
        src: "./devport-photos/hou2.png",
        alt: "Products Page"
      },
      img3: {
        src: "./devport-photos/hou3.png",
        alt: "Stripe Checkout"
      },
      modalData: {
        modalTitle: "Hippie House e-Commerce",
        modalDescription: "Application that allows for purchase and sales of CBD products from a dispensary in NC",
        modalBullets: [
          "Front-end application that fetches product data from back-end API and product images from Amazon S3 bucket",
          "Uses React Stripe components to safely handle payment data from client to server",
          "Made with React, Redux-Persist and a number of other third party packages"
        ]
      }
    },
    carFour: {
      name: "e-Commerce Controller",
      github: "github.com/AaronMacken/e-Commerce-Controller",
      link: "hippie-controller-am.herokuapp.com/",
      id: "4",
      img1: {
        src: "./devport-photos/con1.png",
        alt: "Produts Page"
      },
      img2: {
        src: "./devport-photos/con2.png",
        alt: "Add Product"
      },
      img3: {
        src: "./devport-photos/con3.png",
        alt: "Edit Product"
      },
      modalData: {
        modalTitle: "e-Commerce Controller",
        modalDescription: "Application that allows admins to modify their product data",
        modalBullets: [
          "Front-end application that makes axios requests to a back-end API to modify product data",
          "Includes a login system built with JWT authentication to prevent components from being displayed to non authenticated users",
          "Made quckly with React, Redux and Material UI components"
        ]
      }
    },
    carFive: {
      name: "e-Commerce Server",
      github: "github.com/AaronMacken/e-Commerce-Back",
      link: "hippie-server-am.herokuapp.com/",
      id: "5",
      img1: {
        src: "./devport-photos/ser1.png",
        alt: "Node"
      },
      img2: {
        src: "./devport-photos/ser2.png",
        alt: "Stripe"
      },
      img3: {
        src: "./devport-photos/ser3.png",
        alt: "JWT"
      },
      modalData: {
        modalTitle: "e-Commerce Server",
        modalDescription: "Back-end application that handles stripe payments and also serves product data to both front-end e-Commerce applications",
        modalBullets: [
          "Uses a RESTful API for front-end applications to communicate with",
          "Uses Stripe API to safely process payments",
          "Includes protected routes via JWT authentication middleware",
          "Made with Node JS / Express JS and Mongo DB"
        ]
      }
    },
  };

  // State for modal
  constructor(props) {
    super(props);
    this.state = {
      isShowingModal: false,
      modalData: this.props.carOne.modalData
    };
    this.openModalHandler = this.openModalHandler.bind(this);
  }


  // method for displaying modal via state change
  // passed into carousel component's <img> tag for on click
  openModalHandler = (modalData) => {
    this.setState({
      isShowingModal: true,
      modalData: modalData
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

        
        <Carousel data={this.props.carThree} openModal={this.openModalHandler} />
        <Carousel data={this.props.carFour} openModal={this.openModalHandler} />
        <Carousel data={this.props.carFive} openModal={this.openModalHandler} />
     
        <TitleAlt text="Practice Projects" />
        <Carousel data={this.props.carOne} openModal={this.openModalHandler} />
        <Carousel data={this.props.carTwo} openModal={this.openModalHandler} />
        <SubTitle
          head={"These are just a few of my practice projects!"}
          body={"Checkout the rest on github!"}
        />
        <Notification />
      </div>
    );
  }
}
