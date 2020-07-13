import React from "react"
import { AppBar } from "@material-ui/core"
import { Toolbar } from "@material-ui/core"
import Theme from "../Theme"

export default function Topbar(props) {
  return (
    <Theme>
      <AppBar position="fixed">
        <Toolbar>
          <p>Test</p>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Theme>
  );
};