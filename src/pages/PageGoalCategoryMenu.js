import React, { Component } from "react";
import "../components.css";
import AddCustomGoal from "../components/AddCustomGoal";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

import HealingIcon from "@material-ui/icons/LocalHospital";
import HouseIcon from "@material-ui/icons/House";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link } from "react-router-dom";

class PageGoalCategoryMenu extends Component {
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
          Goal Categories
        </div>
        <div className="goal-category-button-container">
          <Button
            className="goal-category-button"
            component={Link}
            to="/goals/health"
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
            to="/goals/housing"
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
            to="/goals/job"
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
            to="/goals/education"
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
            to="/goals/children"
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
            to="/goals/custom"
            size="large"
            variant="outlined"
            color="default"
            startIcon={<MoreHorizIcon />}
          >
            {"Other"}
          </Button>
          <div className="goal-category-space" />
          <Button
            className="goal-category-button"
            component={Link}
            to="/goals/custom"
            size="large"
            variant="outlined"
            color="default"
            // startIcon={<AddIcon />}
          >
            {"Summary of Custom Goals"}
          </Button>
        </div>
        <AddCustomGoal />
      </div>
    );
  }
}

export default PageGoalCategoryMenu;
