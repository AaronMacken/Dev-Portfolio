import React from "react";
import PurpleButton from "../Buttons/PurpleButton/PurpleButton";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="myNavbar">
       <p class="navbar-brand">Welcome</p>
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
            <a className="nav-link" href="/#">
              About <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
             Resume &nbsp;
             <i class="fas fa-file-download"></i>
            </a>
          </li>
        </ul>
        <PurpleButton text={"Contact"} />
      </div>
    </nav>
  );
}

export default Navbar;
