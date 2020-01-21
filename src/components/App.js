import React, { Component } from "react";
import Navbar from "./Re-usable/Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "./Re-usable/Footer/Footer";
import HttpsRedirect from 'react-https-redirect';

import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./Re-usable/ScrollToTop/ScrollToTop";

import "./App.css";

class App extends Component {
  render() {
    return (
      <HttpsRedirect>
        <Router>
          <ScrollToTop />
          <div className="App">
            <Navbar />
            <Main />
            <Footer />
          </div>
        </Router>
      </HttpsRedirect>

    );
  }
}

export default App;
