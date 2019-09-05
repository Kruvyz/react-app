import styled from 'styled-components';
import { smallAndLow, mediumAndUp } from '../../theme';

export const FeaturedContainer = styled.div`
  .header {
    text-align: center;
    font-family: 'Open Sans';
  }
`;

export const FeatureList = styled.div`
  ${mediumAndUp`
        display: flex;
        justify-content: center;
    `}
`;
