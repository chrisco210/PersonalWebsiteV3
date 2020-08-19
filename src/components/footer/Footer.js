import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Container } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

const useStyles = makeStyles(t => ({
  grow: {
    flexGrow: 1,
  },
  accentBg: {
    backgroundColor: grey[200],
  },
  padded: {
    paddingTop: t.spacing(4),
    paddingBottom: t.spacing(4),
  },
}))

export default function Footer(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Container className={classes.padded}>
        <Grid container spacing={3}>
          {props.children}
        </Grid>
      </Container>
    </React.Fragment>
  )
}
