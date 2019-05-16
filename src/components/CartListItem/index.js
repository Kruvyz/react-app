import React from 'react';
import { connect } from 'react-redux';
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  deleteProductFromCart
} from '../../actions';

import {
  CartItemConteiner,
  CartItemBox,
  CartItemIcon
} from './CartListItem.styled';

import { Button } from '../Details/Details.styled';

const CartListItem = ({
  id,
  photoURL,
  name,
  price,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct
}) => {
  return (
    <CartItemConteiner>
      <CartItemBox>
        <CartItemIcon src={photoURL} alt={name} />
      </CartItemBox>
      <CartItemBox>{name}</CartItemBox>
      <CartItemBox>{price}</CartItemBox>
      <CartItemBox>
        <Button type="button" onClick={() => decreaseQuantity(id)}>
          -
        </Button>
        {quantity}
        <Button type="button" onClick={() => increaseQuantity(id)}>
          +
        </Button>
      </CartItemBox>
      <CartItemBox>{price * quantity}</CartItemBox>
      <CartItemBox>
        <Button type="button" onClick={() => deleteProduct(id)}>
          delete
        </Button>
      </CartItemBox>
    </CartItemConteiner>
  );
};

const mapDipathToProps = dispatch => {
  return {
    increaseQuantity: id => dispatch(increaseProductQuantity(id)),
    decreaseQuantity: id => dispatch(decreaseProductQuantity(id)),
    deleteProduct: id => dispatch(deleteProductFromCart(id))
  };
};

export default connect(
  null,
  mapDipathToProps
)(CartListItem);
