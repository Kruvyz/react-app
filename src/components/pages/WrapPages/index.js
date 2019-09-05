import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Cart from '../Cart';
import Products from '../Filter';
import Details from '../Details';
import Header from '../../Header';
import Wrap from './WrapPages.styled';
import Footer from '../../Footer';

const WrapPages = () => {
  return (
    <Wrap>
      <Header />
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/products/:id" component={Details} />
      </div>
      <Footer />
    </Wrap>
  );
};

export default WrapPages;
