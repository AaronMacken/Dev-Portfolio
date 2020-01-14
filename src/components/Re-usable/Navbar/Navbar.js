import React from "react";
import "./Navbar.css";
import PurpleButton from "../Buttons/PurpleButton/PurpleButton";
import ResponsiveLi from "./ResponsiveLi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      id="myNavbar"
    >
      <p className="navbar-brand" data-toggle="collapse" data-target="#navbarNav">Aaron's Portfolio</p>


      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          {/* li component that conditionally renders the data-toggle and data-target attributes
            in order to allow for navbar collapse
          */}
          <ResponsiveLi>
            <Link to="/" className="nav-link">
              About
            </Link>
          </ResponsiveLi>

          <ResponsiveLi>
            <Link to="/Projects" className="nav-link">
              Projects
            </Link>
          </ResponsiveLi>

          <ResponsiveLi>
            <a href="https://sleepy-scrubland-70497.herokuapp.com/resume" className="nav-link" download>
              Resume &nbsp;
              <i className="fas fa-file-download"></i>
            </a>
          </ResponsiveLi>

          <ResponsiveLi>
            <Link to="/Contact">
              <PurpleButton text={"Contact"} />
            </Link>
          </ResponsiveLi>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
