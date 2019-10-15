import React, { Component } from 'react';
import "./Main.css";
import Landing from "../Landing/Landing";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {/* Render a component with the react router props */}
                    <Route exact path="/" render={ props => <Landing {...props} /> }  />
                </Switch>
            </div>
        )
    }
}

export default withRouter((Main));
