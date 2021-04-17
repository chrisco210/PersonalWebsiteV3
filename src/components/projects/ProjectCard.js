import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    //maxWidth: 750,
    //maxHeight: 750,
    display: "flex",
  },
  media: {
    height: "30vh",
  },
  grow: {
    flexGrow: 1,
  },
  content: {
    //flex: "1 0 auto",
  },
})

export default function ProjectCard(props) {
  const classes = useStyles()

  let ret = (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            alt={props.image.alttext}
            image={props.image.url}
            title={props.image.imagetitle}
          />
        </CardActionArea>
        <div className={classes.content}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.desc}
            </Typography>
          </CardContent>
          <CardActions>
            {props.links.map(e => {
              return (
                <Button
                  href={e.href}
                  color="primary"
                  key={e.name}
                  target="_blank"
                >
                  {e.name}
                </Button>
              )
            })}
          </CardActions>
        </div>
      </Card>
    </React.Fragment>
  )

  return ret
}
