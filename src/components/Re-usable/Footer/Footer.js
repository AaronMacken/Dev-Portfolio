import React, { Component } from "react";
import "./Footer.css";
import {notify} from "../Notification/Notification";
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
          <CopyToClipboard text={'Aaron.A.Macken@gmail.com'}>
            <p className="footerEmail" onClick={() => notify("Copied!", "fas fa-copy")}>Aaron.A.Macken@gmail.com</p>
          </CopyToClipboard>
          
        </div>
      </div>
    );
  }
}
