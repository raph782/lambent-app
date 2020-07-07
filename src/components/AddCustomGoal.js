import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

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
        <AddIcon />
        Add Custom Goal
      </div>
    );
  }
}

export default AddCustomGoal;
