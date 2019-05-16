import {
  PHONES_FETCH_START,
  PHONES_FETCH_FAILED,
  PHONES_FETCH_SUCCESS,
  UPDATE_PHONES_ITEM_START,
  UPDATE_PHONES_ITEM_FAILED,
  UPDATE_PHONES_ITEM_SUCCESS,
  ADD_PHONE_TO_CART,
  DELETE_PHONE_FROM_CART
} from '../actionTypes';

const initialState = {
  products: [],
  isLoading: false,
  error: false
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHONES_FETCH_START:
    case UPDATE_PHONES_ITEM_START:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case PHONES_FETCH_FAILED:
    case UPDATE_PHONES_ITEM_FAILED:
      return {
        ...state,
        error: action.error
      };
    case PHONES_FETCH_SUCCESS:
      return {
        ...state,
        products: action.products
      };

    case UPDATE_PHONES_ITEM_SUCCESS: {
      const index = state.products.findIndex(
        item => item.id === action.productToUpdate.id
      );
      let newProducts;

      if (index >= 0)
        newProducts = [
          ...state.products.slice(0, index),
          action.productToUpdate,
          ...state.products.slice(index + 1)
        ];
      else newProducts = [...state.products, action.productToUpdate];

      return {
        ...state,
        products: newProducts
      };
    }

    // case ADD_PHONE_TO_CART: {
    //   const index = state.products.findIndex(
    //     item => item.id === action.id
    //   );

    //   const product = { ...state.products[index], inCart: true};

    //   return {
    //     ...state,
    //     products: [
    //       ...state.products.slice(0, index),
    //       product,
    //       ...state.products.slice(index + 1)
    //     ]
    //   }
    // }

    // case DELETE_PHONE_FROM_CART: {
    //   const index = state.products.findIndex(
    //     item => item.id === action.id
    //   );

    //   const product = { ...state.products[index], inCart: false};

    //   return {
    //     ...state,
    //     products: [
    //       ...state.products.slice(0, index),
    //       product,
    //       ...state.products.slice(index + 1)
    //     ]
    //   }
    // }
    default:
      return state;
  }
};

export default productsReducer;
