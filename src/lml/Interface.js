import React from "react"
import { TextField, Box, Typography, Link } from "@material-ui/core"

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
    this.asyncInterp(this.state.value, res => {
      this.setState({ isRunning: false })
      if (res.didTimeOut) {
        this.setState({ result: "Timeout" })
      } else {
        if (res.error) {
          console.error(res.error)
          this.setState({ result: "Error: " + JSON.stringify(res.error) })
        } else {
          this.setState({ convert: res.convert, result: res.result })
        }
      }
    })
  }

  asyncInterp(str, onFinish) {
    let theWorker = new Worker("./interpreter.js")

    theWorker.postMessage(str)

    theWorker.onmessage = e => {
      console.log(e.data)
      theWorker.terminate()
      onFinish({ ...e.data, didTimeOut: false })
    }

    setTimeout(() => {
      theWorker.terminate()
      onFinish({ didTimeOut: true })
    }, 10000)
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h1">Lml Online Interpreter</Typography>
        <Typography variant="body1">
          This is an interface to use Lml online. You can also download the
          command line interface from the{" "}
          <Link href="https://github.com/chrisco210/Lml">github repo.</Link>
        </Typography>
        <Typography variant="body1">
          Input an expression and click run to see the converted Lambda
          Calculus, as well as the result of evaluating that expression. For
          help, see the{" "}
          <Link href="https://github.com/chrisco210/Lml#readme">README</Link>,
          or the demo/tutorial provided{" "}
          <Link
            href="https://resources.rachlinski.net/documents/lml_demo.pdf"
            target="_blank"
          >
            here
          </Link>
          .
        </Typography>
        <p>
          <textarea onChange={this.handleChange} width="100%"></textarea>
          <br />
          {this.state.isRunning ? "[*Running*]" : "[Ready]"}
        </p>

        <br></br>
        <button onClick={this.onClick}>Run</button>
        <p></p>
        <p>
          Result=&gt;
          {this.state.result}
        </p>
        <p>Equivalent Lambda Calculus =&gt; {this.state.convert}</p>
      </React.Fragment>
    )
  }
}

export default Interface
