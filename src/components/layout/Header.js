import React from 'react';
import { HeaderStyle, HamburgerIcon, HeaderContainer, Logo, LinkItem } from './Header.styled';
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
                <i className="fas fa-cart-plus">cart</i>
              </LinkItem>
              <LinkItem className="Link__item" to="/">
                <i className="fas fa-home">home</i>
              </LinkItem>
              <LinkItem className="Link__item" to="/products">
                products
              </LinkItem>
            </div>
          </HeaderStyle>
          <HamburgerIcon onClick={this.toggleMenu}>
            <i className="fas fa-bars" />
          </HamburgerIcon>
        </HeaderContainer>
      </div>
    );
  }
}
