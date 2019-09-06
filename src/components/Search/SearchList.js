import React, { Component, Fragment } from 'react';
import { LinkItem } from '../Link';
import { connect } from 'react-redux';
import { productsFetchData } from '../../actions';
import { searchProducts } from '../../selectors';

const SearchList = props => {
  const { searchList } = props;
  return (
    <Fragment>
      {searchList.map(item => (
        <LinkItem
          onClick={props.closeSearch}
          key={item.id}
          className="Link__item"
          to={`/products/${item.id}`}
        >
          {item.name}
        </LinkItem>
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state, props) => {
  return {
    searchList: searchProducts(state, props)
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
)(SearchList);
