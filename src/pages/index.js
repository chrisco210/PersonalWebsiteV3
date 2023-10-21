import React from "react"
import Topbar from "../components/Topbar"
import Theme from "../Theme"
import TitledList from "../components/TitledList"
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
import ExperiencePanel from "../components/experience/ExperiencePanel"

import {
  work,
  projects,
  contactsTitle,
  contactsList,
  titleScreen,
  sections,
} from "../content"

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
        fontSize: 18,
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
  cards: {
    //display: "flex",
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

export default function Home() {
  const classes = styles()

  return (
    <Theme theme={theme}>
      <Topbar links={sections} />

      <Box id="title" className={classes.flex}>
        <TitledList title={titleScreen.title} items={titleScreen.items} />
      </Box>

      <Box id="work" className={[classes.cardContainer, classes.accentBg]}>
        <Box className={classes.center}>
          <Typography variant="h1">Experience</Typography>
        </Box>

        <ExperiencePanel list={work}></ExperiencePanel>
      </Box>

      <Box id="projects" className={[classes.cardContainer]}>
        <Box className={classes.center}>
          <Typography variant="h1">Projects</Typography>
          <Typography>
            Here is a selection of projects I have done over the years. A few
            are from classes I have taken, and some are from previous
            internships.
          </Typography>
        </Box>
        <ProjectPanel proj={projects}></ProjectPanel>
      </Box>

      <Box id="contact" className={[classes.flex, classes.accentBg]}>
        <TitledList
          title={contactsTitle}
          items={contactsList.map(contact => {
            return (
              <Link href={contact.value} variant="h4">
                {contact.name}
              </Link>
            )
          })}
        />
      </Box>

      <Box id="footer-box">
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

                {contactsList.map(item => {
                  return (
                    <Typography>
                      <Link href={item.value}>{item.name}</Link>
                    </Typography>
                  )
                })}
              </CardContent>
            </div>
          </Card>
          <Grid item xs={0} md={6}></Grid>
          <FooterPanel
            align="flex-end"
            items={[
              <Typography variant="p">© Chris Rachlinski 2023</Typography>,
            ]}
          />
        </Footer>
      </Box>
    </Theme>
  )
}
