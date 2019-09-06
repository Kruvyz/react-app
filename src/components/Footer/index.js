import React from 'react';
import { LinkItem } from '../Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHome, faLaptop } from '@fortawesome/free-solid-svg-icons';
import FooterStyle from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyle>
      <div className="Links">
        <LinkItem className="Link__item" to="/cart">
          <FontAwesomeIcon icon={ faCartPlus }/>cart
        </LinkItem>
        <LinkItem className="Link__item" to="/">
          <FontAwesomeIcon icon={ faHome }/>home
        </LinkItem>
        <LinkItem className="Link__item" to="/products">
          <FontAwesomeIcon icon={ faLaptop }/>products
        </LinkItem>
      </div>
    </FooterStyle>
  );
};

export default Footer;
