/* eslint-disable react/button-has-type */
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={this.onIncrement}>Increase</button>
      </div>
    )
  }
}

export default ClickCounter
