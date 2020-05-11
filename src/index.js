import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// put your reducer here!
const reducerInitialState = 0; 

const myReducer = (state = reducerInitialState, action) => {
    console.log('myReducer', state, action);
    

}

// use reducer in store
const storeInstance = createStore( myReducer );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
