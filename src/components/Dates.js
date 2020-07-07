import React, { Component } from "react";
import "../components.css";

class Dates extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", textAlign: "center", paddingBottom: "1em" }}>
        <div className="dates-container">
          <div className="dates-letter">S</div>
          <div className="dates-number">14</div>
        </div>
        <div className="dates-container">
          <div className="dates-letter">M</div>
          <div className="dates-number">15</div>
        </div>
        <div className="dates-container">
          <div className="dates-letter">T</div>
          <div className="dates-number">16</div>
        </div>
        <div className="dates-container">
          <div className="dates-letter">W</div>
          <div className="dates-number">17</div>
        </div>
        <div className="dates-container">
          <div className="dates-letter">T</div>
          <div className="dates-number">18</div>
        </div>
        <div className="dates-container">
          <div className="dates-letter">F</div>
          <div className="dates-number">19</div>
        </div>
        <div className="dates-container">
          <div className="dates-letter">S</div>
          <div className="dates-number">20</div>
        </div>
      </div>
    );
  }
}

export default Dates;
