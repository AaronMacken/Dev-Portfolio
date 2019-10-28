import React from "react";
import "./Jumbo.css";
import { Link } from "react-router-dom";

function Jumbo({ title, subTitle, btnText }) {
  return (
    <header className="jumbotron">
      <div className="jumbotron-contentWrapper">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{subTitle}</p>
        <Link to="/Projects" className="nav-link">
          <button className="jumboBtn">{btnText}</button>
        </Link>
      </div>
    </header>
  );
}

export default Jumbo;
