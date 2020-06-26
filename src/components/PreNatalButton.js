import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PregnantWomanSharpIcon from "@material-ui/icons/PregnantWomanSharp";
import { Link } from "react-router-dom";

class PreNatalButton extends Component {
  state = {};
  render() {
    return (
      <Button
        component={Link}
        to="/goals/prenatal"
        size="large"
        variant="outlined"
        color="default"
        style={{
          marginLeft: "60%",
          width: "12%",
          fontSize: "0.75em",
          textAlign: "center",
        }}
      >
        <PregnantWomanSharpIcon style={{ height: "2em", width: "auto" }} />
        {"Pre Natal"}
      </Button>
    );
  }
}

export default PreNatalButton;
