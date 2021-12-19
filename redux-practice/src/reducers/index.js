import { combineReducers } from 'redux';
import { testReducer } from './TestReducer.js'

export default combineReducers({ testState: testReducer });

