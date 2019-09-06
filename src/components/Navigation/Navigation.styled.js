import styled from 'styled-components';
import { mediumAndUp } from '../../theme';

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${mediumAndUp`
    flex-direction: row;  
  `}
`;