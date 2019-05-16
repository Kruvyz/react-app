import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  SearchContainer,
  SearchBackground,
  SearchListContainer
} from './Search.styled';
import SearchList from './SearchList';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSearchStr = this.handleSearchStr.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
  }

  handleSearchStr(e) {
    this.setState({ searchStr: e.target.value });
  }

  closeSearch() {
    this.setState({ searchStr: '' });
  }

  render() {
    const { searchList, searchStr } = this.state;
    const showSearches = !!searchStr;
    return (
      <SearchContainer>
        <form action="" className="search">
          <input
            type="text"
            value={searchStr}
            onChange={this.handleSearchStr}
            placeholder="search"
            className="form-control"
          />
        </form>
        <SearchListContainer
          className="search-body"
          showSearches={showSearches}
        >
          <SearchList closeSearch={this.closeSearch} searchString={searchStr} />
        </SearchListContainer>
        <SearchBackground showSearches={showSearches} />
      </SearchContainer>
    );
  }
}

export default Search;
