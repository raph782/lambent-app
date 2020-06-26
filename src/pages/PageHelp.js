import React, { Component } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import "../components.css";
import BackButton from "../components/BackButton";
import iconHelp from "../icons/iconHelp.png";

class PageHelp extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <BackButton></BackButton>
        <div className="help-icon">
          <img className="help-icon-img" src={iconHelp}></img>
        </div>
        <p className="help-header">Welcome to the Help Screen!</p>
        <p className="help-info">What are you looking for?</p>
        <ul>
          <li className="help-list">Tutorial Videos</li>
          <li className="help-list">FAQs</li>
          <li className="help-list">User Instructions</li>
        </ul>
      </div>
    );
  }
}

export default PageHelp;
