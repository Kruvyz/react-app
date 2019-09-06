import React from 'react';
import { LinkItem } from '../Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHome, faLaptop, faBars } from '@fortawesome/free-solid-svg-icons';
import { HeaderStyle, HamburgerIcon, HeaderContainer, Logo } from './Header.styled';
import Search from '../Search';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState((prevState, props) => ({
      ...prevState.items,
      show: !prevState.show
    }));
  }

  render() {
    const { show } = this.state;
    const auth = (
      <div className="auth">
        <div className="auth__action">login</div>
        <div className="auth__action">logout</div>
      </div>
    );
    return (
      <div>
        <HeaderContainer>
          <HeaderStyle show={show}>
            <Logo>Laptop world</Logo>
            <Search />
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
          </HeaderStyle>
          <HamburgerIcon onClick={this.toggleMenu}>
            <FontAwesomeIcon icon={ faBars }/>
          </HamburgerIcon>
        </HeaderContainer>
      </div>
    );
  }
}
