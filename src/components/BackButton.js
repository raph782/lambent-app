import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import "../components.css";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

class BackButton extends Component {
  state = {};
  render() {
    return (
      <div className="back-button">
        <Button
          style={{
            fontSize: "15px",
            display: "flex",
            textDecoration: "red"
          }}
          size="large"
          variant="text"
          color="default"
          startIcon={<ArrowBackIosIcon />}
        >
          {"Back"}
        </Button>
      </div>
    );
  }
}

export default BackButton;
