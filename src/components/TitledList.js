import React from "react"

import { Box } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"

export default function TitledList(props) {
  return (
    <React.Fragment>
      <Box>
        {Array.isArray(props.title) ? (
          props.title.map((e, i) => (
            <Typography variant="h1" key={i}>
              {e}
            </Typography>
          ))
        ) : (
          <Typography variant="h1">{props.title}</Typography>
        )}
        <hr />
        {props.items.map((e, i) => (
          <Typography variant="h4" key={i}>
            {e}
          </Typography>
        ))}
      </Box>
    </React.Fragment>
  )
}
