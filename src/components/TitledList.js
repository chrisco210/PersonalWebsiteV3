import React from "react"

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

export default function TitledList(props) {

  return (
    <React.Fragment>
      <Box>
        {
          props.title.length ?
            props.title.map((e) => (<Typography variant="h1">{e}</Typography>))
            : <Typography variant="h1">{props.title}</Typography>
        }
        <hr />
        {props.items.map((e) =>
          (<Typography variant="h4">{e}</Typography>)
        )}
      </Box>
    </React.Fragment >
  );
};