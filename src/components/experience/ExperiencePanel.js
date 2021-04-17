import React from "react"

import { Grid, Box } from "@material-ui/core"
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import ExperienceCard from "./ExperienceCard"

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      h1: {
        fontFamily: "Roboto Slab, serif",
        fontWeight: "lighter",
      },
      h2: {
        fontFamily: "Roboto Slab, serif",
      },
      h3: {
        fontFamily: "Roboto Slab, serif",
      },
      h4: {
        fontFamily: "Roboto Slab, serif",
      },
      h5: {
        fontFamily: "Roboto Slab, serif",
      },
      body1: {
        fontFamily: "Open Sans, sans-serif",
      },
      body2: {
        fontFamily: "Open Sans, sans-serif",
      },
      button: {
        fontFamily: "Open Sans, sans-serif",
      },
    },
    palette: {
      primary: {
        light: "#b8bbcf",
        main: "#888b9e",
        dark: "#5b5e70",
        contrastText: "#fff",
      },
      secondary: {
        light: "#bfd4df",
        main: "#8fa3ad",
        dark: "#61747e",
        contrastText: "#000",
      },
    },
  })
)

const useStyles = makeStyles(t => ({
  cardContainer: {
    flexShrink: 1,
    paddingTop: t.spacing(5),
    paddingBottom: t.spacing(5),
    [theme.breakpoints.up("md")]: {
      paddingLeft: t.spacing(20),
      paddingRight: t.spacing(20),
    },
  },
}))

/**
 * Project panel is the panel containing all projects on the main page
 * @param  props contains a proj object
 * @returns
 */
export default function ExperiencePanel(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      {props.list.map((e, i) => {
        let left = 0
        return (
          <div key={i}>
            <Grid
              container
              spacing={3}
              direction="column"
              alignItems={"flex-start"}
            >
              <Grid
                item
                className={classes.cardContainer}
                sm={12}
                md={12}
                lg={10}
              >
                <ExperienceCard
                  company={e.company}
                  date={e.date}
                  desc={e.desc}
                />
              </Grid>
            </Grid>
          </div>
        )
      })}
    </React.Fragment>
  )
}
