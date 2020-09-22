import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import fetchPoints from './actions/mockFetchPoints';
import { useFetching } from './utils/hooks';
import RootState from './types/rootState';

import BaseMap from './components/base-ui/BaseMap';
import BaseSpinner from './components/base-ui/BaseSpinner';

const Div = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {
  const points = useSelector((state: RootState) => state.points);

  useFetching(fetchPoints);

  return (
    <Div className="app">
      {points.isFetching && <BaseSpinner loading={points.isFetching} />}
      <BaseMap points={points.data} />
    </Div>
  );
}

export default App;
