import React from "react"
import Topbar from "../components/Topbar"
import Theme from "../Theme"
import TitledList from "../components/TitledList"
//import ProjectCard from "../components/ProjectCard"
import Footer from "../components/footer/Footer"
import FooterPanel from "../components/footer/FooterPanel"
import ProjectPanel from "../components/projects/ProjectPanel"

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

/**
 * Main page
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

const sections = [
  { name: "Home", href: "#title" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Work Experience", href: "#work" },
  {
    name: "Resume",
    href: "https://resources.rachlinski.net/documents/resume.pdf",
  },
]

const titleScreen = {
  title: ["Chris", "Rachlinski"],
  items: ["Computer Science at Cornell Engineering '23"],
}

const contacts = {
  title: "Contact Me",
  items: [
    <Link href="mailto:cjr269@cornell.edu" variant="h4">
      cjr269@cornell.edu
    </Link>,
    <Link href="mailto:chrisrachlinski@gmail.com" variant="h4">
      chrisrachlinski@gmail.com
    </Link>,
  ],
}

const projects = [
  {
    name: "Lml",
    desc: (
      <React.Fragment>
        <Typography variant="body1">
          Lml is a functional programming language that is compiled into Lambda
          calculus. It based on the syntax of OCaml, and includes features such
          as first class functions, recursive functions, n-ary tuples, lists,
          while loops, sequences, and references. This project was completed for
          CS 4110 Programming Languages and Logics, in collaboration with Aidan
          Campbell.
        </Typography>
        <br />
        <Typography variant="body1">
          You can try an online version of the same interpreter{" "}
          <Link href="/lml" variant="body1">
            here
          </Link>{" "}
          or at the link below. You can read the demo{" "}
          <Link href="https://resources.rachlinski.net/documents/lml_demo.pdf">
            here
          </Link>{" "}
          for more information.
        </Typography>
      </React.Fragment>
    ),
    image: {
      url: "/images/lml.png",
      alttext: "Lml",
      imagetitle: "Lml",
    },
    links: [
      { name: "Github", href: "https://github.com/chrisco210/Lml" },
      { name: "Online Demo", href: "/lml" },
    ],
  },
  {
    name: "OScrabble",
    desc:
      "OScrabble is an implementation of scrabble written in OCaml, " +
      "it was created for my CS3110 final project.",
    image: {
      url: "/images/oscrabble.png",
      alttext: "Screenshot of OScrabble",
      imagetitle: "OScrabble Screenshot",
    },
    links: [{ name: "Github", href: "https://github.com/tyang98/OScrabble" }],
  },
  {
    name: "TempChamberView",
    desc: (
      <Typography variant="body1">
        TempChamberView is a node.js and express based web interface for a
        temperature calibration chamber at{" "}
        <Link
          href="https://shop.wickeddevice.com/"
          color="secondary"
          target="_blank"
        >
          Wicked Device
        </Link>
        . This software was succesfully used for 3 years until the company
        purchased a new temperature calibration chamber.
      </Typography>
    ),
    image: {
      url: "/images/TempChamberControl.png",
      alttext: "Screenshot of the temperature chamber",
      imagetitle: "TempChamberView screenshot",
    },
    links: [
      { name: "Github", href: "https://github.com/chrisco210/TempChamberView" },
    ],
  },
  {
    name: "Critter World",
    desc: (
      <React.Fragment>
        <Typography variant="body1">
          Critter World is a simulation of critters defined by programs written
          in Java for a CS2112 final project. Critters can move around a
          hexagonal world, eat manna, attack other critters, spawn new critters,
          and mate with other critters. The behavior of critters is determined
          by their program, which can mutate and chage as they mate and spawn
          new critters. Critter world includes a functional GUI created using
          JavaFX.
        </Typography>
        <br></br>
        <Typography variant="body1">
          This project involved writing a parser and interpreter for critter
          programs, writing a simulator that simulated the world and ran critter
          programs, writing a GUI, and finally, writing a networked, distributed
          version of the same program, where a simulation was run on a server
          and any number of clients could connect to that server to view and
          modify the world.
        </Typography>
      </React.Fragment>
    ),
    image: {
      url: "/images/critterworld.png",
      alttext: "Screenshot of critter world",
      imagetitle: "Screenshot of critter world",
    },
    links: [],
  },
]

export default function Home() {
  const classes = styles()

  return (
    <Theme theme={theme}>
      <Topbar links={sections} />

      <Box id="title" className={classes.flex}>
        <TitledList title={titleScreen.title} items={titleScreen.items} />
      </Box>

      <Box id="projects" className={[classes.accentBg, classes.cardContainer]}>
        <Box className={classes.center}>
          <Typography variant="h1">Projects</Typography>
        </Box>
        <ProjectPanel proj={projects}></ProjectPanel>
      </Box>

      <Box id="work" className={classes.flex}></Box>

      <Box id="contact" className={[classes.flex, classes.accentBg]}>
        <TitledList title={contacts.title} items={contacts.items} />
      </Box>

      <Box className={classes.accentBg} id="footer-box">
        <Footer>
          <Card className={classes.cardRoot}>
            <CardMedia
              className={classes.cover}
              image="/images/profile1.png"
              title="Profile picture"
            />
            <div className={classes.cardDetails}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Chris Rachlinski
                </Typography>
                <Typography>
                  <Link href="https://www.linkedin.com/in/chris-rachlinski-00586a178/">
                    LinkedIn
                  </Link>
                </Typography>
                <Typography>
                  <Link href="https://github.com/chrisco210">Github</Link>
                </Typography>
                <Typography>
                  <Link href="mailto:cjr269@cornell.edu">
                    cjr269@cornell.edu
                  </Link>
                </Typography>
                <Typography>
                  <Link href="mailto:chrisrachlinski@gmail.com">
                    chrisrachlinski@gmail.com
                  </Link>
                </Typography>
              </CardContent>
            </div>
          </Card>
          <Grid item xs={0} md={6}></Grid>
          <FooterPanel
            align="flex-end"
            items={[
              <Typography variant="p">© Chris Rachlinski 2021</Typography>,
            ]}
          />
        </Footer>
      </Box>
    </Theme>
  )
}
