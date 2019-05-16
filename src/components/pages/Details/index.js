import React from 'react';
import ProductDetails from '../../ProductDetails';

const Details = ({ match }) => {
  return <ProductDetails productId={match.params.id} />;
};

export default Details;
