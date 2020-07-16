import React from "react"
import Topbar from "../components/Topbar"
import Theme from "../Theme"
import TitledList from "../components/TitledList"
import ProjectCard from "../components/ProjectCard"

import { createMuiTheme } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Container } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

const theme = createMuiTheme({
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

const styles = makeStyles(t => ({
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  flexCards: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "start",
    paddingLeft: t.spacing(12),
    paddingRight: t.spacing(12),
  },
  cardContainer: {
    flexShrink: 1,
    margin: t.spacing(2),
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
}))

const sections = [
  { name: "Home", href: "#title" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "#" },
]

const titleScreen = {
  title: ["Chris", "Rachlinski"],
  items: ["CS Major, Cornell University '23"],
}

const projects = [
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
      <p>
        TempChamberView is a node.js and express based web interface for a
        temperature calibration chamber at{" "}
        <a href="https://shop.wickeddevice.com/">Wicked Device</a>. This
        software was succesfully used for 3 years until the company purchased a
        new temperature calibration chamber.
      </p>
    ),
    image: {
      url: "",
      alttext: "Screenshot of the temperature chamber",
      imagetitle: "TempChamberView screenshot",
    },
    links: [
      { name: "Github", href: "https://github.com/chrisco210/TempChamberView" },
    ],
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
      <Box id="projects" className={[classes.flexCards, classes.accentBg]}>
        {projects.map((e, i) => {
          let left = i % 2 === 0
          return (
            <React.Fragment>
              <Box
                alignSelf={left ? "flex-start" : "flex-end"}
                className={classes.cardContainer}
                p={1}
              >
                <ProjectCard
                  name={e.name}
                  desc={e.desc}
                  image={e.image}
                  key={e.name}
                  links={e.links}
                />
              </Box>
            </React.Fragment>
          )
        })}
      </Box>
      <Box id="contact" className={[classes.flex]}>
        <p>Contact Information goes here</p>
      </Box>
    </Theme>
  )
}
