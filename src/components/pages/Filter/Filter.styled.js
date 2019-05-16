import styled from 'styled-components';
import { mediumAndUp } from '../../../theme';

const FilterContainer = styled.div`
  padding: 2em;
  .price-input {
    margin: 0.4em;
  }
  .price-error {
    color: red;
  }
  .invisible-option {
    height: 0;
  }
  .filter {
    width: fit-content;
    margin: auto;
    font-family: 'Open Sans';

    ${mediumAndUp`
            margin: 0;
        `}
  }
  .form-control {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    width: 100%;
  }
  .price-container {
    display: flex;
    .price-input {
      width: 7em;
    }
  }
  .colorSelect {
    width: 19em;
  }
  ${mediumAndUp`
        display: flex;
        .productList{
            display: flex;
            flex-wrap: wrap;
        }
    `}
`;
export default FilterContainer;
