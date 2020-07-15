import React from "react";
import Topbar from "../components/Topbar";
import Theme from "../Theme";
import TitledList from "../components/TitledList"

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
  { name: 'Home', href: '#title' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '#' }
]

const titleScreen = {
  title: ['Chris', 'Rachlinski'],
  items: [
    'CS Major, Cornell University \'23',
  ]
};

export default function Home() {

  const classes = styles();

  return (
    <Theme theme={theme}>
      <Topbar links={sections} />
      <Box id="title" className={classes.flex}>
        <TitledList title={titleScreen.title} items={titleScreen.items} />
      </Box>
      <Box id="projects" className={[classes.flex, classes.accentBg]} >
        <p>Projects will go here</p>
      </Box>
      <Box id="contact" className={[classes.flex]} >
        <p>Contact Information goes here</p>
      </Box>
    </Theme >
  );
}
