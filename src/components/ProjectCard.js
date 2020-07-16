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
    maxWidth: 500,
    maxHeight: 500,
  },
  media: {
    height: 200,
  },
  grow: {
    flexGrow: 1,
  },
})

export default function ProjectCard(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Card className={classes.root} alignSelf="flex-end">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            alt={props.image.alttext}
            image={props.image.url}
            title={props.image.imagetitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {props.links.map(e => {
            return (
              <Button href={e.href} color="primary" key={e.name}>
                {e.name}
              </Button>
            )
          })}
        </CardActions>
      </Card>
    </React.Fragment>
  )
}
