import React from "react";
import { Container } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Topbar from "../components/Topbar";
import Theme from "../Theme";
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

const sections = [
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Resume', href: '#' }
]

export default function Home() {
  return (
    <Theme theme={theme}>
      <Topbar links={sections} />
      <Container maxWidth="md">
        <Typography variant="h1">Chris <br></br>Rachlinski</Typography>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ornare elit eget tempus. Sed vitae risus velit. Vivamus congue mollis justo quis posuere. Mauris at mi ligula. Quisque id eleifend augue. Nam posuere lectus egestas, aliquam risus in, tincidunt odio. Phasellus porta dolor at purus fringilla, eget pellentesque mi pretium. Maecenas non nunc diam. Vestibulum varius faucibus magna, non congue erat. Vestibulum non arcu scelerisque, porttitor augue sed, convallis purus. Sed sed mollis arcu.</p>
        <p>Aenean et dapibus nisi. Proin et massa ac mi consectetur mattis vel ac nibh. Donec id leo finibus, commodo nulla ut, venenatis mauris. Etiam fermentum ornare nibh, vitae fermentum ante gravida eget. Ut quis volutpat tortor, at imperdiet massa. Aliquam suscipit consequat nisl, non placerat orci suscipit eu. Suspendisse vitae sem sit amet enim bibendum consectetur quis a felis. Curabitur ultrices elit vel laoreet ornare. Ut a aliquet erat. Cras sodales, lacus id finibus cursus, elit tellus ultrices orci, in venenatis ex turpis nec lacus. Integer sed est et est venenatis dignissim scelerisque et massa. Duis at eleifend felis. Nulla diam enim, egestas vitae nulla id, consectetur lobortis orci.</p>
        <p>Proin ac turpis ut dolor iaculis elementum vitae volutpat est. Nunc consectetur venenatis libero, congue malesuada arcu imperdiet et. Mauris tortor ligula, congue id quam id, viverra accumsan velit. Aliquam condimentum finibus mauris, eu dapibus mauris faucibus nec. Praesent eu leo non ex bibendum pretium at eu neque. Sed maximus egestas eros, tempus accumsan odio semper nec. Nunc maximus eleifend quam luctus finibus. Aenean eu nulla malesuada, maximus eros nec, sodales massa. Nulla facilisi. Fusce ac porttitor felis. Maecenas at ultricies libero, a posuere enim. Nulla mollis tellus et lorem auctor, ac consectetur dui elementum. Mauris varius lectus dolor, sit amet malesuada ante eleifend eget.</p>
        <p>Integer vitae dui malesuada, lobortis nunc in, scelerisque libero. Aenean mattis eu nulla sit amet gravida. Vestibulum ac libero id odio pulvinar malesuada et sit amet justo. Nunc a orci gravida, aliquam tortor non, pellentesque neque. Vivamus vel mi arcu. Morbi porttitor eros sapien, vel vehicula odio vehicula a. Vivamus vitae ligula vitae odio lobortis pretium. Curabitur fermentum ligula eu congue dignissim. Aliquam commodo quam pellentesque tortor fermentum, vel aliquam enim tincidunt. Mauris blandit est velit, in vestibulum sapien fringilla nec. Praesent sit amet dignissim sapien. Duis quis facilisis augue. Duis posuere finibus quam, ut bibendum turpis aliquet quis. Morbi viverra ultrices augue, non ullamcorper turpis aliquet ac. Duis lobortis erat et pulvinar finibus. Maecenas rutrum ligula scelerisque leo sagittis venenatis.</p>
      </Container>
    </Theme>
  );
}
