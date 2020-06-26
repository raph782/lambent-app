import React, { Component } from "react";
// import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import "../components.css";
import BackButton from "../components/BackButton";
import iconSettings from "../icons/iconSettings.png";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

class PageSettings extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <BackButton></BackButton>
        <div className="settings-header-container">
          <img className="settings-icon-img" src={iconSettings}></img>
          <div className="settings-header">Settings</div>
        </div>
        <div className="settings-version-header">
          <div className="settings-version-text">Version</div>
          <div className="settings-version-number">v1.0</div>
        </div>
        <List>
          <ListItem className="settings-list-item">
            <ListItemAvatar>
              <AccountCircleOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary="Upload Inspirational Image" />
          </ListItem>
          <ListItem className="settings-list-item">
            <ListItemAvatar>
              <InfoOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary="Terms of Use" />
          </ListItem>
          <ListItem className="settings-list-item">
            <ListItemAvatar>
              <ExitToAppIcon />
            </ListItemAvatar>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default PageSettings;
