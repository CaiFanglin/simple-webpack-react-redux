
import { combineReducers } from 'redux';
import change from './change';
import win from './win';

const Reducer = combineReducers({
  change,
  win,
});

export default Reducer;