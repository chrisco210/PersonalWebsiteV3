import React from "react";
import Topbar from "../components/Topbar";
import Theme from "../Theme";
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

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

const styles = makeStyles((t) => ({
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  grow: {
    flexGrow: 1,
  },
  shrink: {
    flexShrink: 1,
  },
  accentBg: {
    backgroundColor: grey[200],
  }
}));

const sections = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Resume', href: '#' }
]

export default function Home() {

  const classes = styles();

  return (
    <Theme theme={theme} style={{ left: 0, right: 0, marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}>
      <Topbar links={sections} />
      <Box className={classes.flex}>
        <Box>
          <Typography variant="h1" >Chris <br></br>Rachlinski</Typography>
          <Typography variant="h4" style={{}}>CS Major, Cornell University '23</Typography>
        </Box>
      </Box>
      <Box className={[classes.flex, classes.accentBg]} >
        <p>ujsnfgk sedfjkbnsaj WJKT ASKJ NSDZ GKJ J ks dgf</p>
      </Box>
    </Theme >
  );
}
