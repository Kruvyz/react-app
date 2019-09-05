import styled from 'styled-components';
import { smallAndLow, mediumAndUp } from '../../theme';

export const SalesStyles = styled.div`
  display: none;
  padding: 1em;
  .sales {
    padding: 1em 0 0 0;
    display: flex;
    .sales__item {
      width: 100%;
      height: 18em;
      margin: 1em 1em;
      background: #f4f4f4;
    }
  }
  ${mediumAndUp`   
        display: block;
    `}
`;
export const SalesHeader = styled.h1`
  text-align: center;
  font-family: 'Open Sans', snas-serif;
  font-size: 2.5em;
  margin: 0;
`;
