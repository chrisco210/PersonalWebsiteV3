import React from "react"
import {
  Typography,
  Link,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core"

const sections = [
  { name: "Home", href: "#title" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#work" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "https://blog.rachlinski.net", external: true },
  {
    name: "Resume",
    href: "https://resources.rachlinski.net/documents/resume.pdf",
    external: true,
  },
]

const titleScreen = {
  title: ["Chris", "Rachlinski"],
  items: ["SDE at Amazon Web Services", "Computer Science at Cornell '23"],
}

const contactsList = [
  {
    name: "chrisrachlinski@gmail.com",
    value: "mailto:chrisrachlinski@gmail.com",
  },
]

const contactsTitle = "Contact Me"

const projects = [
  {
    name: "Ray Tracing",
    desc: (
      <React.Fragment>
        <Typography variant="body1">
          A C++ ray tracer created for a CS4620 Graphics final project, created
          in collaboration with Jack Greenberg, Aidan Campbell, and Christopher
          Bakhos. Featuring phong lighting, reflections, transparency,
          refraction, and many optimizations to make it run fast(er). Definitely
          one of my favorite projects.
          <br />
        </Typography>
      </React.Fragment>
    ),
    image: {
      url: "/images/finalscene-FIXED-downscale.png",
      alttext: "The scene",
      title: "The scene",
    },
    links: [
      {
        name: "Full res image",
        href: "https://resources.rachlinski.net/img/fullres.png",
      },
    ],
  },
  {
    name: "Personal Website",
    desc: (
      <React.Fragment>
        <Typography variant="body1">
          This is my personal website. I put my projects, experience, and my
          resume on it. It is created using Gatsby.js, a framework for React.js
          to generate static sites, using the Material UI theme for most of the
          default components. Click the link to see how much fun recursion is,
          or see the source code on Github.
          <br />
        </Typography>
      </React.Fragment>
    ),
    image: {
      url: "/images/personal_site.png",
      alttext: "This website",
      title: "This website",
    },
    links: [
      {
        name: "Github",
        href: "https://github.com/chrisco210/PersonalWebsiteV3",
      },
      {
        name: "Website",
        href: "https://rachlinski.net",
      },
    ],
  },
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
      {
        name: "Guide",
        href: "https://resources.rachlinski.net/documents/lml_demo.pdf",
      },
    ],
  },
  {
    name: "Feed The Beans",
    desc: (
      <React.Fragment>
        <Typography variant="body1">
          This is a food blog I run with my girlfriend. It is a mostly a joke,
          it is a joke, kind of, but we do kinda take it seriously. We
          originally wanted to find the best eggs benedict in Ithaca. However,
          we have since expanded to include more than brunch, and never included
          a single eggs benedict on our blog. The blog is made with{" "}
          <Link href="https://hexo.io/" color="secondary" target="_blank">
            Hexo
          </Link>
          , a content manager which builds to a static site.
        </Typography>
      </React.Fragment>
    ),
    image: {
      url: "/images/feedthebeans.png",
      alttext: "Picture of the blog",
      title: "Picture of the blog",
    },
    links: [
      {
        name: "The blog",
        href: "https://blog.rachlinski.net",
      },
      {
        name: "Github",
        href: "https://github.com/chrisco210/beans",
      },
    ],
  },
  {
    name: "OScrabble",
    desc: (
      <Typography variant="body1">
        OScrabble is an implementation of scrabble written in OCaml, in
        collaboration with Tony Yang and Jack Greenberg, created for our CS 3110
        final project. It includes local multiplayer, automatic word checking,
        as well as automatic scoring including bonuses.
      </Typography>
    ),
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
        <Typography variant="body2">
          Source code not available due to academic integrity.
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

const work = [
  {
    company: "Amazon Web Services",
    position: "Software Development Engineer ",
    date: "July 2023 - Present",
    desc: (
      <Typography variant="h6" component="h5">
        I work on{" "}
        <a href="https://aws.amazon.com/s3/outposts/" target="_blank">
          S3 on Outposts
        </a>
        .
      </Typography>
    ),
  },
  {
    company: "Amazon Web Services",
    position: "SDE Intern",
    date: "Summer 2022",
    desc: (
      <Typography variant="h6" component="h5">
        As an intern at AWS, I worked in bringing object storage (S3) to edge
        environments on the AWS Snow platform. Specifically, I created an API to
        allow the customer to view the status of the object storage Service on
        their edge computing devices.
      </Typography>
    ),
  },
  {
    company: "Cornell University",
    position: "Teaching Assistant",
    date: { from: "August 2021", to: "Present" },
    desc: (
      <Typography variant="h6" component="h5">
        As a teaching assistant for Intro to Analysis of Algorithms, I held
        weekly office hours to answer student's questions and graded weekly
        problem sets.
      </Typography>
    ),
  },
  {
    company: "Wicked Device, LLC",
    position: "Summer Intern",
    date: { from: "June 2020", to: "August 2020" },
    desc: (
      <Typography variant="h6" component="h5">
        • Researched propane tank level sensors for use with a LoraWAN and WiFi
        connected tank level meter and provided a recommendation on which sensor
        was best. <br />• Implemented a NodeJS-based backend for integrating the
        company’s products with If This Then That. <br />• Helped modify
        existing infrastructure to implement OAuth2 for use with If This Then
        That.
      </Typography>
    ),
  },
  {
    company: "Wicked Device, LLC",
    date: { from: "June 2019", to: "August 2019" },
    position: "Summer Intern",
    desc: (
      <Typography variant="h6" component="h5">
        • Researched soil moisture sensors for use with a LoraWAN and WiFi
        connected soil moisture meter, and provided a recommendation on which
        sensor I thought was the best to use in the product.
        <br /> • Researched sound level meters and developed a prototype for a
        LoraWAN and WiFi connected sound level meter. <br />• Delivered a
        presentation and written report on my findings.
      </Typography>
    ),
  },
  {
    company: "Wicked Device, LLC",
    date: { from: "June 2018", to: "August 2018" },
    position: "Summer Intern",
    desc: (
      <Typography variant="h6" component="h5">
        • Developed a prototype of a LoraWAN and WiFi connected thermometer that
        was later developed into a product. <br /> • Developed a NodeJS based
        web interface for a piece of calibration equipment used by the company.
      </Typography>
    ),
  },
]

export { work, projects, contactsTitle, contactsList, titleScreen, sections }
