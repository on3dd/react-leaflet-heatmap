import React from 'react';
import styled from 'styled-components';
import BaseMap from './components/base-ui/BaseMap';

const Div = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`

const App = () => {
  return (
    <Div className="app">
      <BaseMap />
    </Div>
  );
}

export default App;
