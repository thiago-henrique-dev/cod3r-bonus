import React from "react";
import ReactDOM from "react-dom";
import Primeiro, { Segundo } from './componente'
import SilvaFamily from './silvaFamily'
import Family from './family'
import Member from './member'
import Field from './field'
import FieldReducer from "./fieldReducer";
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from "./counter";
import counterReducer from "./counterReducer";

const reducers = combineReducers({
    counter: counterReducer
})
ReactDOM.render(<Provider store={createStore(reducers)}><Counter/></Provider>, document.getElementById('app'))

