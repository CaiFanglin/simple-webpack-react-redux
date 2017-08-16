import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


import Reducer from './Reducers';
import * as acts from './actions.js';
import Form from './components/Form.jsx';
import 'babel-polyfill'

const store = applyMiddleware(thunkMiddleware)(createStore)(Reducer);

const Comp = connect(
    state => ({state}),
    dispatch => ({
        actions: bindActionCreators(acts, dispatch)
    })
)(Form);

let root = document.querySelector('body');
let leaf = document.createElement('section');

root.appendChild(leaf);

render(
    (
        <Provider store={store}>
            <Comp />
        </Provider>
    ),
    leaf
);