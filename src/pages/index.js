import React from "react";
import { Container } from "@material-ui/core";
import Topbar from "../components/Topbar";
import Theme from "../Theme";
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Roboto Slab, serif',
      fontWeight: "lighter"
    },
    h2: {
      fontFamily: 'Roboto Slab, serif',
    },
    h3: {
      fontFamily: 'Roboto Slab, serif',
    },
    h4: {
      fontFamily: 'Roboto Slab, serif',
    },
    h5: {
      fontFamily: 'Roboto Slab, serif',
    },
    body1: {
      fontFamily: 'Open Sans, sans-serif'
    },
    body2: {
      fontFamily: 'Open Sans, sans-serif'
    },
    button: {
      fontFamily: 'Open Sans, sans-serif'
    }
  },
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

const styles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    maxHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingLeft: theme.spacing(16),
    paddingRight: theme.spacing(16),
    marginTop: theme.spacing(-4),
    marginBottom: theme.spacing(-4),
  },
  grow: {
    flexGrow: 1,
  },
  shrink: {
    flexShrink: 1,
  },
}));

const sections = [
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Resume', href: '#' }
]

export default function Home() {

  const classes = styles();

  return (
    <Theme theme={theme}>
      <Topbar links={sections} />
      <Box className={classes.flex}>
        <Box>
          <Typography variant="h1" >Chris <br></br>Rachlinski</Typography>
          <Typography variant="h4" style={{}}>CS Major, Cornell University '23</Typography>
        </Box>
      </Box>
      <Box className={classes.flex}>
        <p>ujsnfgk sedfjkbnsaj WJKT ASKJ NSDZ GKJ J ks dgf</p>
      </Box>
    </Theme>
  );
}
