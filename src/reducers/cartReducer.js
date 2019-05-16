import {
  ADD_PHONE_TO_CART,
  DELETE_PHONE_FROM_CART,
  INCREASE_PHONE_QUANTITY,
  DECREASE_PHONE_QUANTUTY,
  CLEAR_CART
} from '../actionTypes';

const initialState = {
  cartListId: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHONE_TO_CART: {
      const index = state.cartListId.findIndex(item => item.id === action.id);
      if (index >= 0) return state;

      return {
        ...state,
        cartListId: [...state.cartListId, { id: action.id, quantity: 1 }]
      };
    }
    case DELETE_PHONE_FROM_CART: {
      const index = state.cartListId.findIndex(item => item.id === action.id);
      return {
        ...state,
        cartListId: [
          ...state.cartListId.slice(0, index),
          ...state.cartListId.slice(index + 1)
        ]
      };
    }
    case INCREASE_PHONE_QUANTITY: {
      const newList = state.cartListId.map(item => {
        const newItem = item;

        if (newItem.id === action.id) {
          newItem.quantity += 1;
        }
        return newItem;
      });

      return {
        ...state,
        cartListId: newList
      };
    }
    case DECREASE_PHONE_QUANTUTY: {
      const newList = state.cartListId.map(item => {
        const newItem = item;

        if (newItem.id === action.id && newItem.quantity > 1) {
          newItem.quantity -= 1;
        }
        return newItem;
      });

      return {
        ...state,
        cartListId: newList
      };
    }
    case CLEAR_CART:
      return {
        ...state,
        cartListId: []
      };
    default:
      return state;
  }
};

export default cartReducer;
