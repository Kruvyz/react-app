import styled from 'styled-components';
import { smallAndLow, mediumAndUp } from '../../theme';

export const BanerContainer = styled.div`
  padding: 2em;
  margin: 1em;
  background: #f1f1f1;
  display: flex;
  justify-content: flex-end;
  .baner {
    &__name {
      text-align: right;
      font-family: 'Open Sans';
      padding-bottom: 0.5em;
    }
    &__body {
      text-align: right;
      font-family: 'Roboto', sans-serif;
      font-size: 1.2em;
    }
    ${mediumAndUp`
            width: 20em;
        `}
  }
`;

export const BanerContainer00 = styled.div``;
