import React, { Component } from "react";
import "../components.css";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

import HealingIcon from "@material-ui/icons/Healing";
import HouseIcon from "@material-ui/icons/House";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { Link } from "react-router-dom";

class PageKeyMeasuresMenu extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        {/* <BackButton></BackButton> */}
        <div
          style={{
            width: "100%",
            height: "auto",
            // border: "3px solid black",
            textAlign: "center",
            fontSize: "2em",
            textDecoration: "underline",
          }}
        >
          Key Measures
        </div>
        <div className="goal-category-button-container">
          <Button
            className="goal-category-button"
            component={Link}
            to="/measures/health"
            size="large"
            variant="outlined"
            color="default"
            startIcon={<HealingIcon />}
          >
            {"Health"}
          </Button>
          <div className="goal-category-space" />
          <Button
            className="goal-category-button"
            component={Link}
            to="/measures/housing"
            size="large"
            variant="outlined"
            color="default"
            startIcon={<HouseIcon />}
          >
            {"Housing"}
          </Button>
          <div className="goal-category-space" />
          <Button
            className="goal-category-button"
            component={Link}
            to="/measures/job"
            size="large"
            variant="outlined"
            color="default"
            startIcon={<WorkIcon />}
          >
            {"Job"}
          </Button>
          <div className="goal-category-space" />
          <Button
            className="goal-category-button"
            component={Link}
            to="/measures/education"
            size="large"
            variant="outlined"
            color="default"
            startIcon={<SchoolIcon />}
          >
            {"Education"}
          </Button>
          <div className="goal-category-space" />
          <Button
            className="goal-category-button"
            component={Link}
            to="/measures/children"
            size="large"
            variant="outlined"
            color="default"
            startIcon={<PeopleAltIcon />}
          >
            {"Children"}
          </Button>
          <div className="goal-category-space" />
          <Button
            className="goal-category-button"
            component={Link}
            to="/measures/custom"
            size="large"
            variant="outlined"
            color="default"
            startIcon={<AddIcon />}
          >
            {"Custom"}
          </Button>
        </div>
      </div>
    );
  }
}

export default PageKeyMeasuresMenu;
