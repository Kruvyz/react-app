import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const StyledLoader = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoaderComponent = () => {
  return (
    <StyledLoader
      type="Puff"
      color="#00BFFF"
      height={60}
      width={60}
    />
  );
}

export default LoaderComponent;