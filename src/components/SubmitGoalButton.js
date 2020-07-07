import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class SubmitGoalButton extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <Button
            className="goal-category-button"
            component={Link}
            to="/goals/health"
            size="small"
            variant="contained"
            color="primary"
            style={{
              width: "auto",
            }}
          >
            {"Submit"}
          </Button>
        </div>
        <div style={{ textAlign: "center", paddingTop: "1em" }}>
          <Button
            className="goal-category-button"
            component={Link}
            to="/goals/health"
            size="small"
            variant="contained"
            color="default"
            style={{
              width: "auto",
            }}
          >
            {"Submit & Add Goal "}
          </Button>
        </div>
      </div>
    );
  }
}

export default SubmitGoalButton;
