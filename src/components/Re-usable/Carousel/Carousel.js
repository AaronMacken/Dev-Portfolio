import React, { Component } from 'react'
import "./Carousel.css";

// Component uses a bootstrap carousel
// data is passed as a prop, which is an object containing other objects to render appropriate
// values for each carousel item for the image source and alt attribute
// images for this are stored in the carousel component and require is called in addition to the string
// value pointing at the path for the images
// bootstrap carousels need unique ID's, so the id 'carousel' + data.id is passed into each carousel, allowing for control
// over individual carousels.
export default class Carousel extends Component {
    render() {
        const { data, openModal} = this.props
        return (
            <div className="carouselContainer">
                <h3 style={{ marginBottom: ".75rem", textAlign: "center", fontWeight: "200" }}>{data.name}</h3>

                <div className="linkContainer">

                    <div className="linkContainer-item">
                        <i id="githubLogo" className="fab fa-github" style={{ fontSize: "120%", color: "#421dd8" }}></i>&nbsp;
                        <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer">{`See on github!`}</a>
                    </div>

                    <div className="linkContainer-item">
                        <i id="emailLogo" className="fas fa-globe-americas"></i>&nbsp;
                        <a id="redLink" href={`https://${data.link}`} target="_blank" rel="noopener noreferrer">{`${data.link}`}</a>
                    </div>

                </div>

                <div id={`carousel${data.id}`} className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img onClick={() => openModal(data.modalData)}
                                src={require(`${data.img1.src}`)} className="d-block w-100" alt={`${data.img1.alt}`} />
                        </div>
                        <div className="carousel-item">
                            <img onClick={() => openModal(data.modalData)}
                                src={require(`${data.img2.src}`)} className="d-block w-100" alt={`${data.img2.alt}`} />
                        </div>
                        <div className="carousel-item">
                            <img onClick={() => openModal(data.modalData)}
                                src={require(`${data.img3.src}`)} className="d-block w-100" alt={`${data.img3.alt}`} />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href={`#carousel${data.id}`} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={`#carousel${data.id}`} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        )
    }
}
