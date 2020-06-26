import React, { Component } from "react";
import "../components.css";
// import BackButton from "./components/BackButton";
import AddCustomGoal from "../components/AddCustomGoal";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";
import WorkIcon from "@material-ui/icons/Work";

var cars = [
  "Ask friends about job openings",
  "Search online for jobs",
  "Pick professional attire for interview",
  "Spend time networking",
  "Submit an application to 2 job listings",
  "Work on improving skills",
  "Update Resume",
  "Practice 5 interview questions",
  "Prepare for job interviews",
  "Update cover letter",
  "Check the newspaper",
];

class PageGoalCategoryJob extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        {/* <BackButton></BackButton> */}
        <div>DATES SECTION IN CONSTRUCTION</div>

        <div className="goal-cat-header">
          <WorkIcon fontSize="large"></WorkIcon>
          <div style={{ fontSize: "2em", display: "flex" }}>Job</div>
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
          <AddCustomGoal />
        </div>
      </div>
    );
  }
}

export default PageGoalCategoryJob;
