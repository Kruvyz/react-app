import styled from 'styled-components';
import { mediumAndUp } from '../../theme';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${mediumAndUp`
    justify-content: normal;
    width: auto;
  `}
`;