import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {



  handleIncrease = () => {
    console.log('in handleIncrease');
    this.props.dispatch({
      type: 'increaseSpeed'
    })
  

  }

  handleDecrease = () => {
    console.log('in handleDecrease');
    this.props.dispatch({
      type: 'decreaseSpeed'
    })

  }

  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={this.handleIncrease}>Increase Speed</button>
        <p>{JSON.stringify(this.props.reduxState)}</p>
        <button onClick= {this.handleDecrease}>Decrease Speed</button>
      </div>
    )
  }
}

export default SpeedControl;