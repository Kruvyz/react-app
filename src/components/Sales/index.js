import React, { Component } from 'react';
import { SalesStyles, SalesHeader } from './Sales.styled';

const Sales = props => {
  return (
    <SalesStyles>
      <SalesHeader>Sales</SalesHeader>
      <div className="sales">
        <div className="sales__item" />
        <div className="sales__item" />
        <div className="sales__item" />
        <div className="sales__item" />
      </div>
    </SalesStyles>
  );
};

export default Sales;
