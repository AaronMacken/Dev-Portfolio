import React, { Component } from "react";
import Navbar from "./Re-usable/Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "./Re-usable/Footer/Footer";

import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
