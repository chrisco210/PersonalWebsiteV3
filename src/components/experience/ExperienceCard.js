import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { grey } from "@material-ui/core/colors"
import { CardHeader } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    maxHeight: 750,
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
  accentBg: {
    backgroundColor: grey[100],
  },
})

/**
 *
 * @param {company : string, date: {from: string, to: string}, desc : any} props
 * @returns
 */
export default function ExperienceCard(props) {
  const classes = useStyles()

  let ret = (
    <React.Fragment>
      <Card className={[classes.root]}>
        <CardActionArea className={classes.accentBg} disabled>
          <CardHeader
            title={props.company}
            subheader={
              props.date ? props.date.from + " - " + props.date.to : ""
            }
          />
        </CardActionArea>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  )

  return ret
}
