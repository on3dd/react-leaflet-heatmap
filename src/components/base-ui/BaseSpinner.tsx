import React from 'react';
import { ClipLoader } from "react-spinners";
import styled from 'styled-components';

type BaseSpinnerProps = {
  loading: boolean;
}

const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
