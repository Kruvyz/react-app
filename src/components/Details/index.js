import React from 'react';
import { withTranslation } from 'react-i18next';
import { compose } from 'redux';
import { connect } from 'react-redux';
import i18n from '../../i18n';
import { addProductToCart } from '../../actions';
import {
  Conteiner,
  DetailsImg,
  Button,
  Title,
  InfoConteiner
} from './Details.styled';

const Details = ({ imageUrl, name, price, color, id, addToCart, t }) => {
  return (
    <Conteiner>
      <DetailsImg src={imageUrl} alt={name} />
      <InfoConteiner>
        <Title>{name}</Title>
        <p>
          {t('price')}: {price}
        </p>
        <div>
          {t('color')}:
          <select>
            {color.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
        <Button onClick={() => addToCart(id)}>{t('add')}</Button>
      </InfoConteiner>
    </Conteiner>
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
)(Details);
