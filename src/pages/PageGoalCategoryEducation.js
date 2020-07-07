import React, { Component } from "react";
import "../components.css";
// import BackButton from "./components/BackButton";
import SubmitGoalButton from "../components/SubmitGoalButton";
import Dates from "../components/Dates";
import AddCustomGoal from "../components/AddCustomGoal";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";
import SchoolIcon from "@material-ui/icons/School";

var cars = [
  "Find online prep course",
  "Spend 1 hour studying for GED exam",
  "Read for 1 hour",
  "Review completed practice exam",
  "Order study materials online",
  "Create flashcards",
  "Practice using computer",
  "Check exam locations",
  "Prepare proper identification",
  "Take a practice GED exam",
  "Register for the GED exam",
];

class PageGoalCategoryEducation extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        {/* <BackButton></BackButton> */}
        <Dates />

        <div className="goal-cat-header">
          <SchoolIcon fontSize="large"></SchoolIcon>
          <div style={{ fontSize: "2em", display: "flex" }}>Education</div>
        </div>

        <div className="category-list">
          <div style={{ width: "inherit" }}>
            <div style={{ width: "40%", display: "inline" }}>
              <p>Select goals to appear on your home screen:</p>
            </div>
            <div style={{ width: "20%", display: "inline" }}>
              {/* <p>Recurring?</p> */}
            </div>
          </div>
          <List>
            <Divider />
            <ListItem>
              <Checkbox></Checkbox>
              <ListItemText primary={cars[0]} />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <Checkbox></Checkbox>
              <ListItemText primary={cars[1]} />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <Checkbox></Checkbox>
              <ListItemText primary={cars[2]} />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <Checkbox></Checkbox>
              <ListItemText primary={cars[3]} />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <Checkbox></Checkbox>
              <ListItemText primary={cars[4]} />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <Checkbox></Checkbox>
              <ListItemText primary={cars[5]} />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <Checkbox></Checkbox>
              <ListItemText primary={cars[6]} />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <Checkbox></Checkbox>
              <ListItemText primary={cars[7]} />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <Checkbox></Checkbox>
              <ListItemText primary={cars[8]} />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <Checkbox></Checkbox>
              <ListItemText primary={cars[9]} />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <Checkbox></Checkbox>
              <ListItemText primary={cars[10]} />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <SubmitGoalButton />
        </div>
      </div>
    );
  }
}

export default PageGoalCategoryEducation;
