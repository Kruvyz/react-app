import React from 'react';
import { Link } from 'react-router-dom';
import FooterStyle from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyle>
      <div className="Links">
        <Link className="Link__item" to="/cart">
          <i className="fas fa-cart-plus">cart</i>
        </Link>
        <Link className="Link__item" to="/">
          <i className="fas fa-home">home</i>
        </Link>
        <Link className="Link__item" to="/products">
          products
        </Link>
      </div>
    </FooterStyle>
  );
};

export default Footer;
