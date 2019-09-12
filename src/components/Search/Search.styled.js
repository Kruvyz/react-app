import styled from 'styled-components';
import { smallAndLow, mediumAndUp } from '../../theme';

export const SearchContainer = styled.div`
  .search {
    z-index: 99;
    position: relative;
  }
  .form-control {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    box-sizing: border-box;
  }
  .Link__item {
    background: white;
    width: 12.2em;
    margin: 0.5em;
    padding: 0.5em;
    border-radius: 4px;
    display: block;

    position: relative;
    z-index: 99;
  }
  .search-body {
    position: absolute;
  }

  ${mediumAndUp`
    width: 15em;
  `}
`;

export const SearchBackground = styled.div`
    display:  ${props => (props.showSearches ? 'block' : 'none')};
    color: white;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    opacity: 0.5
`;

export const SearchListContainer = styled.div`
  display: ${props => (props.showSearches ? 'block' : 'none')};
`;
