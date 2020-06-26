import React, { Component } from "react";
import "../components.css";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import Checkbox from "@material-ui/core/Checkbox";

class PageGoalCategoryCustom extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <div>DATES SECTION IN CONSTRUCTION</div>

        <div className="goal-cat-header">
          <AddIcon fontSize="large"></AddIcon>
          <div
            style={{ fontSize: "2em", display: "flex", paddingLeft: "0.5em" }}
          >
            Custom
          </div>
        </div>

        <div className="category-list">
          <div style={{ width: "inherit" }}>
            <div style={{ width: "40%", display: "inline" }}>
              <p>
                {"Please select 1 tag that best describes your goal "}
                <span style={{ color: "red" }}>*</span>
              </p>
            </div>
          </div>
          <div className="custom-container" container>
            <div style={{ textDecoration: "underline", textAlign: "left" }}>
              Tags
            </div>
            <div className="custom-option" item xs={3}>
              Health
            </div>
            <div className="custom-option" item xs={3}>
              Job
            </div>
            <div className="custom-option" item xs={3}>
              Housing
            </div>
            <div className="custom-option" item xs={3}>
              Education
            </div>
            <div className="custom-option" item xs={3}>
              Child/ren
            </div>
            <div className="custom-option" item xs={3}>
              Other
            </div>
          </div>
          <div className="custom-limit">50 characters maximum</div>
          <div className="custom-type">
            <div>
              {"Type your custom goal here "}
              <span style={{ color: "red" }}>*</span>
            </div>
          </div>
          <div className="custom-recurring-container">
            <p className="custom-recurring-text">
              Recurring Goal: repeats each day, even after being completed,
              until you remove it from home screen.
            </p>
            <Checkbox color="default" style={{ marginLeft: "10%" }}></Checkbox>
          </div>
          <Button
            style={{
              fontSize: "15px",
              display: "flex",
              marginLeft: "77.5%",
            }}
            size="large"
            variant="text"
            color="default"
            startIcon={<AddIcon />}
          >
            {"AddGoal"}
          </Button>
        </div>
      </div>
    );
  }
}

export default PageGoalCategoryCustom;
