import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getProductsInCart } from '../../selectors';
import { clearProductsFromCart } from '../../actions';
import { Button } from '../Details/Details.styled';
import { InputGroup, Label } from './CartForm.styled';

class CartForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      address: '',
      email: '',
      city: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const { cartList, changeIsOrder, clearCart } = this.props;

    const newList = cartList.map(item => {
      return {
        name: item.name,
        price: item.price,
        quantity: item
      };
    });
    event.preventDefault();
    console.log(newList, this.state);
    changeIsOrder(false);
    clearCart();
  }

  render() {
    const { t } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputGroup>
          <Label htmlFor="fullName">
            {t('fullName')}:
            <input
              type="text"
              name="fullName"
              onChange={this.handleInputChange}
              required
            />
          </Label>
          <Label htmlFor="address">
            {t('address')}:
            <input
              type="text"
              name="address"
              onChange={this.handleInputChange}
              required
            />
          </Label>
          <Label htmlFor="email">
            {t('email')}:
            <input
              type="email"
              name="email"
              onChange={this.handleInputChange}
              required
            />
          </Label>
          <Label htmlFor="city">
            {t('city')}:
            <input
              type="text"
              name="city"
              onChange={this.handleInputChange}
              required
            />
          </Label>
        </InputGroup>
        <Button type="submit">{t('confirm')}</Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartList: getProductsInCart(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => dispatch(clearProductsFromCart())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withTranslation()
)(CartForm);
