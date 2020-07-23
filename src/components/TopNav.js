import React from "react";
import logoOurReach from "../icons/logoOurReach.png";
import "../components.css";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import IconButton from "@material-ui/core/IconButton";
import PageHomePage from "../pages/PageHomePage";
import PageGoalCategories from "../pages/PageGoalCategoryMenu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";

/* Router Page Imports */
import PageSettings from "../pages/PageSettings";
import PageHelp from "../pages/PageHelp";

export default function TopNav() {
  return (
    <div>
      <div className="top-nav-stick">
        <div
          className="top-nav-child"
          style={{ width: "80", paddingLeft: "10%" }}
        >
          <img className="lambent-sizing" src={logoOurReach} alt="Logo" />
        </div>
        <div
          className="top-nav-child"
          style={{ width: "25%", justifyContent: "right" }}
        >
          <IconButton component={Link} to="/settings" aria-label="delete">
            <SettingsIcon color="action" style={{ display: "flex" }} />
          </IconButton>
          <IconButton
            component={Link}
            to="/help"
            aria-label="delete"
            color="primary"
          >
            <HelpOutlineIcon color="action" style={{ display: "flex" }} />
          </IconButton>
        </div>
      </div>
    </div>

    /* <Switch>
        <Route path="/settings" component={PageGoalCategories}></Route>
        <Route path="/help" component={PageHelp}></Route>
        <Route path="/" component={PageHomePage}></Route>
      </Switch> */
  );
}
