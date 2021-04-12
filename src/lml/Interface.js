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
    this.onClick = this.onClick.bind(this)
    this.state = {
      value: "",
      convert: "",
      result: "",
      isRunning: false,
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  onClick() {
    this.setState({ isRunning: true })
    lml.interp(this.state.value, res => {
      this.setState({ isRunning: false })
      if (res.didTimeOut) {
        this.setState({ result: "Timeout" })
      } else {
        this.setState({ convert: res.convert, result: res.result })
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <textarea onChange={this.handleChange}></textarea>
        <button onClick={this.onClick}>Run</button>
        <p>Is running: {this.state.isRunning ? "true" : "false"}</p>
        <p></p>
        <p>{this.state.value}</p>
        <p>Result=>{this.state.result}</p>
        <p>Equivalent Lambda Calculus => {this.state.convert}</p>
      </React.Fragment>
    )
  }
}

export default Interface
