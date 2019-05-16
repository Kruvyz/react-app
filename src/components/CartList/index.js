import React, { Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getProductsInCart, getTotalPrice } from '../../selectors';
import i18n from '../../i18n';
import CartListItem from '../CartListItem';
import Total from './CartList.styled';
import { Button } from '../Details/Details.styled';

const CartList = ({ cartList, total, t, changeIsOrder }) => {
  if (cartList.length) {
    return (
      <Fragment>
        {cartList.map(item => (
          <CartListItem key={item.id} {...item} />
        ))}
        <Total>
          <p>
            {t('total')}: {total}
          </p>
          <Button type="button" onClick={() => changeIsOrder(true)}>
            {t('order')}
          </Button>
        </Total>
      </Fragment>
    );
  }

  return <h1>Your Cart is empty!!!</h1>;
};

const mapStateToProps = state => {
  return {
    cartList: getProductsInCart(state),
    total: getTotalPrice(state)
  };
};

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(CartList);
