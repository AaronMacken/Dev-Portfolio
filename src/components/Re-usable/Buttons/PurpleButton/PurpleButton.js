import React, { Component } from "react";
import "./PurpleButton.css";

export default class PurpleButton extends Component {
  render() {
    const { text, big } = this.props;

    const biggerStyle = {
        letterSpacing: "1px",
<<<<<<< HEAD

=======
>>>>>>> 5bdb7936c7282a9f31f808d20a07e64a964dc6ba
        fontWeight: "500",
        width: "15rem",
        height: "4rem",
        fontSize: "130%"
    }

    return (
      <div>
        {big ? (
          <button className="purpleButton" style={biggerStyle} type="submit">{text}</button>
        ) : (
          <button className="purpleButton" type="submit">{text}</button>
        )}
      </div>
    );
  }
}
