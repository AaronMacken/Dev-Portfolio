import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerRow">
          <i id="githubLogo" className="fab fa-github"></i>&nbsp;
          <a href="https://github.com/AaronMacken">
            https://github.com/AaronMacken
          </a>
        </div>

        <div className="footerRow">
          <i id="emailLogo" className="far fa-envelope"></i>&nbsp;
          <p style={{marginBottom: "0", color: "#ff3935"}}>Aaron.A.Macken@gmail.com</p>
        </div>
      </div>
    );
  }
}
