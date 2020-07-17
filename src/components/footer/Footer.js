import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Container } from "@material-ui/core"
import FooterPanel from "./FooterPanel"

const useStyles = makeStyles(t => ({
  grow: {
    flexGrow: 1,
  },
}))

export default function Footer(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={3}>
          <FooterPanel align="flex-start"></FooterPanel>
          <Grid item xs={0} md={6}></Grid>
          <FooterPanel align="flex-end"></FooterPanel>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
