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
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PreNatalButton from "../components/PreNatalButton";
import { Link } from "react-router-dom";

var cars = [
  "Take enteric coated aspirin according to care plan",
  "Check feet daily",
  "Go to lab appointment for HbA1c (3 months since last)",
  "Work towards ideal body weight",
  "Follow my diet",
  "Stop smoking",
  "Check blood sugar levels according to care plan",
  "Lose 5 pounds by next office visit",
  "Walk 30 minutes",
  "Talk about having diabetes with family",
  "Attend diabetes support group",
];

class PageGoalCategoryHealth extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        {/* <BackButton></BackButton> */}
        <Dates />

        <div className="goal-cat-header">
          <PeopleAltIcon fontSize="large"></PeopleAltIcon>
          <div style={{ fontSize: "2em", display: "flex" }}>Health</div>
          <PreNatalButton />
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

export default PageGoalCategoryHealth;
