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
      <p class="navbar-brand"></p>

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
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Projects" className="nav-link">
              Projects
            </Link>
          </li>

          <li className="nav-item">
            <a href="http://localhost:3001/resume" className="nav-link" download>
              Resume &nbsp;
              <i class="fas fa-file-download"></i>
            </a>
          </li>

          <li className="nav-item">
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
