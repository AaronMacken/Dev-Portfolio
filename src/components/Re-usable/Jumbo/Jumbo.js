import React from "react";
import OrangeButton from "../Buttons/OrangeButton/OrangeButton";
import "./Jumbo.css";

function Jumbo({ title, subTitle, btnText }) {
  return (
    <header className="jumbotron">
        <div className="jumbotron-contentWrapper">
          <h1 className="display-4">{title}</h1>
          <p className="lead">{subTitle}</p>
          <button className="jumboBtn">{btnText}</button>
        </div>
    </header>
  );
}

export default Jumbo;
