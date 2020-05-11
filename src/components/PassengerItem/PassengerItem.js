import React, { Component } from 'react'

export class PassengerItem extends Component {
    componentDidMount() {
        console.log('ITEM' ,this.props.reduxState.item);
        
    }

    render() {
        return (
            <>
                <li> {this.props.reduxState.passengers} </li>  
                {/* <li> {this.props.reduxState.item} </li>   */}
                
            </>
        )
    }
}

export default PassengerItem;
