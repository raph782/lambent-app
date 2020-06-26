import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HealingIcon from "@material-ui/icons/Healing";
import HomeIcon from "@material-ui/icons/Home";
import "../components.css";

const BottomNav = () => {
  return (
    <div className="bottom-nav-stick">
      <BottomNavigation
        style={{ backgroundColor: "#e9e8e1" }}
        showLabels="true"
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/health"
          label="Health"
          icon={<HealingIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/resources"
          label="Resources"
          icon={<AssignmentIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;
