import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { grey } from "@material-ui/core/colors"

const useStyles = makeStyles(t => ({
  root: {
    //maxHeight: 750,
    display: "flex",
  },
  media: {
    height: "30vh",
  },
  grow: {
    flexGrow: 1,
  },
  accentBg: {
    backgroundColor: grey[100],
    maxWidth: t.spacing(45),
  },
  padded: {
    padding: t.spacing(2),
  },
  fullWidth: {
    width: "100%",
  },
}))

/**
 *
 * @param {company : string, date: {from: string, to: string}, desc : any} props
 * @returns
 */
export default function ExperienceCard(props) {
  const classes = useStyles()

  let dateString = ""

  if (props.date) {
    if (props.date.from && props.date.to) {
      dateString = props.date.from + " - " + props.date.to
    } else {
      dateString = props.date
    }
  }

  let headerText = (
    <div className={classes.padded}>
      <Typography variant="h5" component="h2">
        {props.position}
      </Typography>
      <Typography variant="body2">{props.company}</Typography>
      <Typography variant="body2">{dateString}</Typography>
    </div>
  )

  let actionArea = (
    <CardActionArea className={classes.accentBg} disabled>
      {headerText}
    </CardActionArea>
  )

  let ret = (
    <React.Fragment>
      <Card className={[classes.root, classes.fullWidth]}>
        {actionArea}
        <div>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.desc}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </React.Fragment>
  )

  return ret
}
