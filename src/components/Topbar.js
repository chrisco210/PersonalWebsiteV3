import React from "react"
import { AppBar } from "@material-ui/core"
import { Toolbar } from "@material-ui/core"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const bigStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 96,
    alignItems: 'flex-center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  toolbarsmall: {
    minHeight: 50,
    alignItems: 'flex-center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    paddingRight: theme.spacing(2)
  }

}));

export default function Topbar(props) {
  let trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const classes = bigStyles();

  return (
    <React.Fragment className={classes.root}>
      <AppBar position="fixed" color={trigger ? "default" : "primary"}
        elevation={trigger ? 2 : 0}
        style={{ transition: "300ms ease" }}>
        <Toolbar className={trigger ? classes.toolbarsmall : classes.toolbar}
          style={{ transition: "300ms ease" }} >
          <div className={classes.grow} />

          {props.links.map((e) => {
            return (
              <Button color="inherit" variant="h3" href={e.href} size="large">
                {e.name}
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
    </React.Fragment >
  );
};