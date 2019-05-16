import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productsFetchData } from '../../actions';
import ProductCard from '../ProductCard';
import ListConteiner from './ProductList.styled';

class ProductsList extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();
  }

  render() {
    const { isLoading, hasError, products } = this.props;

    if (isLoading) return <h1>Loading..</h1>;
    if (hasError) return <p>Sorry. Failed loading data</p>;

    return (
      <ListConteiner>
        {products.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ListConteiner>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
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
)(ProductsList);
