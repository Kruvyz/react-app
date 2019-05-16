import { css } from 'styled-components';

import constants from './constants';

export const smallAndLow = (...args) => css`
  @media screen and ${constants.breakpoints.small} {
    ${css(...args)}
  }
`;

export const mediumAndUp = (...args) => css`
  @media screen and ${constants.breakpoints.medium} {
    ${css(...args)}
  }
`;

export const largeAndUp = (...args) => css`
  @media screen and ${constants.breakpoints.large} {
    ${css(...args)}
  }
`;
