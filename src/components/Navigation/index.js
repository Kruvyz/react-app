import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHome, faLaptop, faBars } from '@fortawesome/free-solid-svg-icons';
import { LinkItem } from '../Link';
import { NavigationContainer } from './Navigation.styled';

export default class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationContainer>
          <LinkItem className="Link__item" to="/cart">
            <FontAwesomeIcon icon={ faCartPlus }/>cart
          </LinkItem>
          <LinkItem className="Link__item" to="/">
            <FontAwesomeIcon icon={ faHome }/>home
          </LinkItem>
          <LinkItem className="Link__item" to="/products">
            <FontAwesomeIcon icon={ faLaptop }/>products
          </LinkItem>
        </NavigationContainer>
      </React.Fragment>
    )
  }
}