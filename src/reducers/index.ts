import { combineReducers } from 'redux';
import pointReducer from './pointsReducer';

export default combineReducers({
  points: pointReducer,
});
