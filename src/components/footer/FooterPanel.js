import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"
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
        <Typography variant="h5">{props.header}</Typography>
        {props.items.map((e, i) => {
          return (
            <Grid item key={i}>
              {e}
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}
