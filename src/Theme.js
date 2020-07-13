import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#b8bbcf',
      main: '#888b9e',
      dark: '#5b5e70',
      contrastText: '#fff',
    },
    secondary: {
      light: '#bfd4df',
      main: '#8fa3ad',
      dark: '#61747e',
      contrastText: '#000',
    },
  },
});

export default function Theme(props) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}