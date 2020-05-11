import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// put your reducer here!


const reducerInitialState = {
    speed: 0, 
    passengers: ['Lindsey']
}; 


const myReducer = (state = reducerInitialState, action) => {
    console.log('myReducer', state, action);
    if (action.type === 'increaseSpeed') {
        console.log('increasingSpeedInReducer');
        state.speed += 1; 
        console.log('new state.Speed is', state.speed);
        
        
    } else if (action.type === 'decreaseSpeed') {
        console.log('decreasingSpeedInReducer');
        state.speed -= 1; 
        console.log('new state.Speed is', state.speed);
        
    } else if (action.type === 'addToArray') {
        console.log('in addToArray on Index', action.payload);
        state.passengers = [...state.passengers, action.payload];
        console.log('Current state', state.passengers);
        
        
    }
     

}

// use reducer in store
const storeInstance = createStore( myReducer );

ReactDOM.render
(<Provider store={storeInstance}>
    <App />
    </Provider>, document.getElementById('root'));
