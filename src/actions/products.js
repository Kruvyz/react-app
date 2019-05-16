import { fetch } from 'whatwg-fetch';
import {
  PHONES_FETCH_START,
  PHONES_FETCH_FAILED,
  PHONES_FETCH_SUCCESS,
  UPDATE_PHONES_ITEM_START,
  UPDATE_PHONES_ITEM_FAILED,
  UPDATE_PHONES_ITEM_SUCCESS
} from '../actionTypes';
import apiUrl from '../configs';

export const productsFetchStart = start => {
  return {
    type: PHONES_FETCH_START,
    isLoading: start
  };
};

export const productsFetchFailed = error => {
  return {
    type: PHONES_FETCH_FAILED,
    error
  };
};

export const productsFetchSuccess = products => {
  return {
    type: PHONES_FETCH_SUCCESS,
    products
  };
};

export const productsFetchData = () => {
  const url = apiUrl;
  return dispatch => {
    dispatch(productsFetchStart(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(productsFetchStart(false));

        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(productsFetchSuccess(items)))
      .catch(() => dispatch(productsFetchFailed(true)));
  };
};

const updateProductsItemStart = start => {
  return {
    type: UPDATE_PHONES_ITEM_START,
    isLoading: start
  };
};

const updateProductsItemFailed = error => {
  return {
    type: UPDATE_PHONES_ITEM_FAILED,
    error
  };
};

const updateProductsItem = productToUpdate => {
  return {
    type: UPDATE_PHONES_ITEM_SUCCESS,
    productToUpdate
  };
};

export const productDetailsFetchData = id => {
  const url = `${apiUrl}/${id}`;

  return dispatch => {
    dispatch(updateProductsItemStart(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(updateProductsItemStart(false));
        return response;
      })
      .then(response => response.json())
      .then(item => dispatch(updateProductsItem(item)))
      .catch(() => dispatch(updateProductsItemFailed(true)));
  };
};
