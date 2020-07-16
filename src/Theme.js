import React from "react"
import { ThemeProvider } from "@material-ui/styles"

export default function Theme(props) {
  return <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>
}
