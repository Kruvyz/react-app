import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../ProductCard';
import { productsFetchData } from '../../../actions';
import { getFilteredProducts } from '../../../selectors';

class FilteredList extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();
  }

  render() {
    const { products } = this.props;
    return (
      <div className="productList">
        {products.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: getFilteredProducts(state, props),
    hasError: state.products.error,
    isLoading: state.products.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(productsFetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredList);
