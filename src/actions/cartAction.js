import {
  ADD_PHONE_TO_CART,
  DELETE_PHONE_FROM_CART,
  INCREASE_PHONE_QUANTITY,
  DECREASE_PHONE_QUANTUTY,
  CLEAR_CART
} from '../actionTypes';

export const addProductToCart = id => {
  return {
    type: ADD_PHONE_TO_CART,
    id
  };
};

export const deleteProductFromCart = id => {
  return {
    type: DELETE_PHONE_FROM_CART,
    id
  };
};

export const increaseProductQuantity = id => {
  return {
    type: INCREASE_PHONE_QUANTITY,
    id
  };
};

export const decreaseProductQuantity = id => {
  return {
    type: DECREASE_PHONE_QUANTUTY,
    id
  };
};

export const clearProductsFromCart = () => {
  return {
    type: CLEAR_CART
  };
};
