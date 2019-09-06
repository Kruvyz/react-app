import React from 'react';
import { LinkItem } from '../Link';
import FooterStyle from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyle>
      <div className="Links">
        <LinkItem className="Link__item" to="/cart">
          <i className="fas fa-cart-plus">cart</i>
        </LinkItem>
        <LinkItem className="Link__item" to="/">
          <i className="fas fa-home">home</i>
        </LinkItem>
        <LinkItem className="Link__item" to="/products">
          products
        </LinkItem>
      </div>
    </FooterStyle>
  );
};

export default Footer;
