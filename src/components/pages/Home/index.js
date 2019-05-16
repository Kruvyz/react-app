import React from 'react';
import ProductList from '../../ProductList';
import Header from '../../layout/Header';
import FeatureProducts from './FeatureProducts';
import Sales from './Sales';
import Baner from './Baner';

const Home = () => {
  return (
    <div>
      <Baner />
      <Sales />
      <FeatureProducts />
    </div>
  );
};
export default Home;
