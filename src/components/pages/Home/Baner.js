import React, { Component } from 'react';
import { BanerContainer } from './Baner.styled';

const Baner = props => {
  return (
    <BanerContainer>
      <div className="baner">
        <h1 className="baner__name">Suspendisse interdum rutrum nise.</h1>

        <p className="baner__body">
          Ut tellus quam, venenatis non tempus vitae, volutpat blandit libero
          eget etos.
        </p>
      </div>
    </BanerContainer>
  );
};

export default Baner;
