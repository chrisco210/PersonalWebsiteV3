import React from "react"
import { AppBar } from "@material-ui/core"
import { Toolbar } from "@material-ui/core"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const bigStyles = makeStyles(theme => ({
  toolbar: {
    minHeight: 96,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  toolbarsmall: {
    minHeight: 50,
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
    paddingRight: theme.spacing(2),
  },
}))

export default function Topbar(props) {
  let trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const classes = bigStyles()

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color={trigger ? "primary" : "transparent"}
        elevation={trigger ? 2 : 0}
        style={{ transition: "300ms ease" }}
      >
        <Toolbar
          className={trigger ? classes.toolbarsmall : classes.toolbar}
          style={{ transition: "300ms ease" }}
        >
          <div className={classes.grow} />
          <div>
            {props.links.map((e, i) => {
              return (
                <Button color="inherit" href={e.href} size="large" key={i}>
                  {e.name}
                </Button>
              )
            })}
          </div>
        </Toolbar>
      </AppBar>
      {/* <Toolbar className={classes.toolbar} color="transparent" /> */}
    </React.Fragment>
  )
}
