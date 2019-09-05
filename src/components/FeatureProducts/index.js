import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../ProductCard';
import { productsFetchData } from '../../actions';
import { getFeaturedProducts } from '../../selectors';
import { FeaturedContainer, FeatureList } from './FeatureProducts.styed';

class FeatureProducts extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { isLoading, hasError, interestigProducts } = this.props;
    if (isLoading) return <h1>Loading..</h1>;
    if (hasError) return <p>Sorry. Failed loading data</p>;

    return (
      <FeaturedContainer>
        <h1 className="header">Featured products</h1>
        <FeatureList>
          {interestigProducts
            .map(item => (
              <ProductCard className="card" key={item.id} {...item} />
            ))
            .slice(0, 4)}
        </FeatureList>
      </FeaturedContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    interestigProducts: getFeaturedProducts(state),
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
)(FeatureProducts);
