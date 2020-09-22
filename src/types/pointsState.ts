import PointsArr from './pointsArr';

export default interface PointsState {
  data: PointsArr;
  isFetching: boolean;
  hasError: boolean;
  errorMessage: string | null;
}
