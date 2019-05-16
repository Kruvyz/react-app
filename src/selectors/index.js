import { createSelector } from 'reselect';

const getItems = state => {
  return state.products.products;
};

const getIdInCart = state => {
  return state.cart.cartListId || [];
};

const getProductId = (state, props) => props.productId;

export const getItemById = createSelector(
  [getItems, getProductId],
  (items, id) => items.find(item => item.id === +id)
);

export const getFeaturedProducts = createSelector(
  [getItems],
  items => items.filter(item => item.interesting)
);

const getFilterData = (state, props) => {
  const { minPrice, maxPrice, color } = props.filterData;
  return { minPrice, maxPrice, color };
};

export const getFilteredProducts = createSelector(
  [getItems, getFilterData],
  (items, filterData) => {
    let { minPrice, maxPrice, color } = filterData;
    if (!minPrice) {
      minPrice = 0;
    }
    if (!maxPrice) {
      maxPrice = Number.MAX_SAFE_INTEGER;
    }
    if (!color) {
      color = 'all';
    }

    return items
      .filter(item => item.price > minPrice && item.price < maxPrice)
      .filter(item => item.color.includes(color) || color === 'all');
  }
);

const getSearchString = (state, props) => {
  return props.searchString;
};

export const searchProducts = createSelector(
  [getItems, getSearchString],
  (items, searcStr) => {
    const searchReg = new RegExp(searcStr, 'i');

    return items.filter(item => searchReg.test(item.name));
  }
);

export const getProductsInCart = createSelector(
  [getItems, getIdInCart],
  (items, idList) => {
    const newList = [];
    for (let i = 0; i < idList.length; i += 1) {
      const cartItem = items.find(item => item.id === idList[i].id);
      if (cartItem) {
        newList.push({ ...cartItem, ...idList[i] });
      }
    }
    return newList;
  }
);

export const getTotalPrice = createSelector(
  [getProductsInCart],
  items => {
    let total = 0;
    for (let i = 0; i < items.length; i += 1) {
      total += items[i].price * items[i].quantity;
    }

    return total;
  }
);
