import {
  FETCHING_POINTS,
  FETCHING_POINTS_SUCCESS,
  FETCHING_POINTS_FAIL,
} from '../types/actionTypes';
import { sleep } from '../utils/functions';
import dataset from '../assets/dataset.json';

const fetchPoints = () => async (dispatch) => {
  dispatch({ type: FETCHING_POINTS });

  await sleep(2000);

  dispatch({ type: FETCHING_POINTS_SUCCESS, payload: dataset.data });
};

export default fetchPoints;
