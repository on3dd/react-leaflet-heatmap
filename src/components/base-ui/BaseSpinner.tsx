import React from 'react';
import { ClipLoader } from "react-spinners";
import styled from 'styled-components';

type BaseSpinnerProps = {
  loading: boolean;
}

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1000;
`

const BaseSpinner = ({ loading }: BaseSpinnerProps) => {
  return (
    <Div className="spinner">
      <ClipLoader
        size={75}
        color="#ffffff"
        loading={loading}
      />
    </Div>
  )
}

export default BaseSpinner;
