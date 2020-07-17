import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
const useStyles = makeStyles(t => ({
  grow: {
    flexGrow: 1,
  },
}))

export default function FooterPanel(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid
        container
        item
        xs
        direction="column"
        spacing={1}
        alignItems={props.align}
      >
        <Grid item>
          <p>Item 1</p>
        </Grid>
        <Grid item>
          <p>Item 1</p>
        </Grid>
        <Grid item>
          <p>Item 1</p>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
