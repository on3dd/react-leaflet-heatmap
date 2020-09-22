import Action from '../types/action';
import PointsState from '../types/pointsState';
import {
  FETCHING_POINTS,
  FETCHING_POINTS_SUCCESS,
  FETCHING_POINTS_FAIL,
} from '../types/actionTypes';

const initialState: PointsState = {
  data: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const pointsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCHING_POINTS:
      return Object.assign({}, state, {
        data: [],
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_POINTS_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: false,
      });

    case FETCHING_POINTS_FAIL:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: true,
        errorMessage: action.err,
      });

    default:
      return state;
  }
};

export default pointsReducer;
