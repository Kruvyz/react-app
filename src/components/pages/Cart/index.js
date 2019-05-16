import React, { PureComponent, Fragment } from 'react';
import CartList from '../../CartList';
import CartForm from '../../CartForm';

class Cart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isOrder: false };
    this.changeIsOrder = this.changeIsOrder.bind(this);
  }

  changeIsOrder(bool) {
    this.setState({ isOrder: bool });
  }

  render() {
    const { isOrder } = this.state;
    return (
      <Fragment>
        {!isOrder ? <CartList changeIsOrder={this.changeIsOrder} /> : ''}
        {isOrder ? <CartForm changeIsOrder={this.changeIsOrder} /> : ''}
      </Fragment>
    );
  }
}
export default Cart;
