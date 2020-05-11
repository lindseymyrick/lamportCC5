import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    console.log('in handleChange', event.target.value);
    this.setState({
      name: event.target.value
    }) //end setState

  } //end handleChange

  handleClick = () => {
    console.log('in handleClick');
    this.props.dispatch({
      type: 'addToArray',
      payload: this.state.name
    })

  }


  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name" onChange= {this.handleChange} />
        <button onClick = {this.handleClick}>Add Passenger</button>

        <ul>PASSENGER LIST: GOES HERE</ul>
        
      
      </div>
    )
  }
}

export default Passengers;