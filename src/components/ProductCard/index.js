import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { addProductToCart } from '../../actions';

import {
  ProductCardIcon,
  CardConreiner,
  StyledLink,
  CardButton
} from './ProductCard.styled';

const ProductCart = ({ imageUrl, name, id, t, addToCart }) => {
  return (
    <CardConreiner>
      <ProductCardIcon src={imageUrl} alt={name} />
      <div>
        <StyledLink to={`/products/${id}`}>{name}</StyledLink>
        <CardButton onClick={() => addToCart(id)} type="button">
          {t('add')}
        </CardButton>
      </div>
    </CardConreiner>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addProductToCart(id))
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withTranslation()
)(ProductCart);
