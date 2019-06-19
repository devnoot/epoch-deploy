import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { ThemeContext } from "../theme-context";

class MainAppBar extends Component {
  render() {
    let theme = this.context;

    const AppBarStyles = {
      backgroundColor: theme.appBar.background,
      transition: "all 0.25s ease",
      marginBottom: "32px"
    };

    return (
      <AppBar position="static" style={AppBarStyles}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Epoch
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

MainAppBar.contextType = ThemeContext;
export default MainAppBar;
