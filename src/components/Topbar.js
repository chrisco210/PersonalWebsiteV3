import React from "react"
import { AppBar } from "@material-ui/core"
import { Toolbar } from "@material-ui/core"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


export default function Topbar(props) {
  let trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <React.Fragment>
      <AppBar position="fixed" color={trigger ? "default" : "primary"}
        elevation={trigger ? 2 : 0}
        style={{ transition: "400ms ease" }}>
        <Toolbar>
          <p>Test</p>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment >
  );
};