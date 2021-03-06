import React, { Component } from "react";
import Goals from "../components/Goals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../components.css";
import defaultMotivational from "../icons/defaultMotivational.jpg";

class PageHomePage extends Component {
  state = {};
  
  render() {
    return (
      <div className="body">
        <div className="motivational-photo" alignItems="center">
          <img src={defaultMotivational}></img>
        </div>
        <div className="achieving-my-goals">Achieving My Goals</div>
        <Goals></Goals>
        <Link to="/resources">
          <div className="post-goals">Goal History</div>
        </Link>
        <Link to="/resources">
        <div className="post-goals">Key Measures</div>
        </Link>
      </div>
    );
  }
}

export default PageHomePage;
