import React from "react"
import Theme from "../Theme"
import {
  Typography,
  Link,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@material-ui/core"

import Interface from "../lml/Interface"
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"

/**
 * Main page
 */

/**
 * Page to run the LML interpreter
 */

const styles = makeStyles(t => ({
  flex: {
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    alignItems: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    padding: t.spacing(5),
  },
  flexCards: {
    display: "flex",
    minHeight: "100vh",
  },
  cardContainer: {
    paddingTop: t.spacing(5),
    pattingBottom: t.spacing(5),
    flexShrink: 1,
    [theme.breakpoints.up("md")]: {
      paddingLeft: t.spacing(20),
      paddingRight: t.spacing(20),
    },
  },
  grow: {
    flexGrow: 1,
  },
  shrink: {
    flexShrink: 1,
  },
  accentBg: {
    backgroundColor: grey[200],
  },

  content: {
    flex: "1 0 auto",
  },
  cardRoot: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      minHeight: 151,
    },
  },
  cardDetails: {
    display: "flex",
    flexDirection: "column",
  },
  cover: {
    width: 151,
  },
}))
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
export default function Lml() {
  const classes = styles()
  return (
    <Theme theme={theme}>
      <Container maxWidth="lg">
        <Interface></Interface>
      </Container>
    </Theme>
  )
}
