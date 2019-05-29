import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'


function Routing() {
    return (
        <Router>
            <Switch>

                <Route exact path="/" component={Home} />
                <Route path="/experience" component={Experience} />
                <Route path="/skills" component={Skills} />
            </Switch>

        </Router>
    );
}
export default Routing