import React from "react"
import { Grid, Typography } from "@material-ui/core"
export default function FooterPanel(props) {
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
