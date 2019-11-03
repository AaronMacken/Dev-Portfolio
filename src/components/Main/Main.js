import React, { Component } from 'react';
import "./Main.css";
import Landing from "../Landing/Landing";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import { Switch, Route, withRouter } from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {/* Render a component with the react router props */}
                    <Route exact path="/" render={ props => <Landing {...props} /> }  />
                    <Route exact path="/Contact" render={ props => <Contact {...props} /> }  />
                    <Route exact path="/Projects" render={ props => <Project {...props} /> }  />
                </Switch>
            </div>
        )
    }
}

export default withRouter((Main));
