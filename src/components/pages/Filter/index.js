import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { productsFetchData } from '../../../actions';
import FilterContainer from './Filter.styled';
import { getFilteredProducts } from '../../../selectors';
import FilteredList from './FilteredList';
import i18n from '../../../i18n';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { isLoading, hasError, t } = this.props;
    const { minPrice, maxPrice } = this.state;

    if (isLoading) return <h1>Loading..</h1>;
    if (hasError) return <p>Sorry. Failed loading data</p>;

    return (
      <FilterContainer>
        <div className="filter">
          <form className="filter__form">
            <div className="price-filter form-group">
              <div>Price filter</div>
              <div className="price-container">
                <input
                  className="form-control price-input"
                  type="number"
                  min="0"
                  max="1000000"
                  id="minprice"
                  placeholder="min"
                  name="minPrice"
                  onChange={this.handleChange}
                />
                <input
                  className="form-control price-input"
                  type="number"
                  min="0"
                  max="1000000"
                  id="maxprice"
                  placeholder="max"
                  name="maxPrice"
                  onChange={this.handleChange}
                />
              </div>
              {+minPrice > +maxPrice && maxPrice !== '' && (
                <div className="price-error">
                  {t('max price should be greater than min price')}
                </div>
              )}
            </div>

            <div>Color select</div>
            <select
              name="color"
              className="form-control colorSelect"
              id="selectcolor"
              onChange={this.handleChange}
            >
              <option value="all">{t('all')}</option>
              <option value="black">{t('black')}</option>
              <option value="white">{t('white')}</option>
              <option value="green">{t('green')}</option>
              <option value="red">{t('red')}</option>
              <option value="silver">{t('grey')}</option>
            </select>
          </form>
        </div>

        <FilteredList filterData={this.state} className="productList" />
      </FilterContainer>
    );
  }
}

export default withTranslation()(Products);
