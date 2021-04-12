import React from "react"
import { TextField } from "@material-ui/core"

import lml from "lml-online"
/**
 * Interface for interacting with the LML interpreter
 */
class Interface extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: "",
      convert: "",
      result: "",
    }
  }

  handleChange(e) {
    try {
      let res = lml.interp(e.target.value)
      if (res) {
        this.setState({
          value: e.target.value,
          convert: res.convert,
          result: res.result,
        })
      }
    } catch (e) {}
  }

  render() {
    return (
      <React.Fragment>
        <textarea onChange={this.handleChange}></textarea>
        <p>{this.state.value}</p>
        <p>--> {this.state.convert}</p>
        <p>-->{this.state.result}</p>
      </React.Fragment>
    )
  }
}

export default Interface
