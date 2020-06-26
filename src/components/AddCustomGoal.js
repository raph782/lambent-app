import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddCustomGoal extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          fontSize: "14px",
          fontWeight: "bold",
          textAlign: "center",
          textDecoration: "underline",
        }}
        component={Link}
        to="/goals/custom"
      >
        Add Custom Goal
      </div>
    );
  }
}

export default AddCustomGoal;
