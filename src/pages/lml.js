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
} from "@material-ui/core"
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"

import Interface from "../lml/Interface"

/**
 * Page to run the LML interpreter
 */

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
  return (
    <Theme theme={theme}>
      <Interface></Interface>
    </Theme>
  )
}
