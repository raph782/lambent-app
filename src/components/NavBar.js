import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="red">
            React Sample
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
