import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productDetailsFetchData } from '../../actions';
import { getItemById } from '../../selectors';
import Details from '../Details';
import LoaderComponent from '../Loader';

class ProductDetails extends Component {
  componentDidMount() {
    const { productDetails, productId } = this.props;

    productDetails(productId);
  }

  render() {
    const { isLoading, hasError, product } = this.props;

    if (isLoading) return <LoaderComponent />;
    if (hasError) return <p>Sorry. Failed loading data</p>;

    return <div>{product ? <Details {...product} /> : ''}</div>;
  }
}

const mapStateToProps = (state, props) => {
  return {
    hasError: state.products.error,
    isLoading: state.products.isLoading,
    product: getItemById(state, props)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    productDetails: id => dispatch(productDetailsFetchData(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
