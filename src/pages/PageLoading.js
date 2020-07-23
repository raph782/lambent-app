import React, { Component } from "react";
import "./App.css";

import TopNavIntro from "./components/TopNavIntro";
import logoOurReach from "./icons/logoOurReach.png";

class PageLoading extends Component {
  state = {};
  render() {
    return (
      <div>
        <TopNavIntro></TopNavIntro>
        <div>
          {" "}
          <img src={logoOurReach} alt="Logo" />
        </div>
        <div>Loading...</div>
        {/* <TestNav></TestNav>
        <Test></Test>
        {/* <GoalsTest></GoalsTest>
        <Goals></Goals> */}
      </div>
    );
  }
}

export default PageLoading;
