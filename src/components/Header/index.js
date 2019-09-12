import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HeaderStyle, HamburgerIcon, HeaderContainer, Logo } from './Header.styled';
import Search from '../Search';
import Navigation from '../Navigation';
import { isMobile } from 'react-device-detect';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: isMobile
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <HeaderContainer>
        <HeaderStyle hidden={hidden}>
          <Logo>Laptop world</Logo>
          <Search/>
          <Navigation/>         
        </HeaderStyle>
        <HamburgerIcon onClick={this.toggleMenu}>
          <FontAwesomeIcon icon={ faBars }/>
        </HamburgerIcon>
      </HeaderContainer>
    );
  }
}
