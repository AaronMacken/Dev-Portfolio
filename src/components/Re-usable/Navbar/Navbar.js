import React from "react";
import "./Navbar.css";
import PurpleButton from "../Buttons/PurpleButton/PurpleButton";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      id="myNavbar"
    >
      <p class="navbar-brand"  data-toggle="collapse" data-target="#navbarNav">Aaron's Portfolio</p>
      

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
          {/*
           data-toggle collapse used on li to close nav menu on link click.
           this is normally put onto the anchor tag, 
           but when added to react's <a></a> tag replacement (the Link component)
           the functionality does not work. Given to parent container instead (the <li></li> tag)
          */}
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <Link to="/Projects" className="nav-link">
              Projects
            </Link>
          </li>

          <li
            className="nav-item"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <a
              href="/resume"
              className="nav-link"
              download
            >
              Resume &nbsp;
              <i class="fas fa-file-download"></i>
            </a>
          </li>

          <li
            className="nav-item"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <Link to="/Contact">
              <PurpleButton text={"Contact"} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
