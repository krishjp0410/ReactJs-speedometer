import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrease = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.mph + 10}))
    }
  }

  onDecrease = () => {
    const {count} = this.state

    if (count < 0) {
      this.setState(prevState => ({count: prevState.mph - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />
        <h1 className="heading">Speed is {count}mph</h1>
        <p className="description">Min Limit is 0mph Max Limit is 200mph</p>
        <div>
          <button className="buttons" type="button" onClick={this.onIncrease}>
            Accelerate
          </button>
          <button
            className="buttons break-button"
            type="button"
            onClick={this.onDecrease}
          >
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
