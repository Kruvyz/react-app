import styled from 'styled-components';
import { mediumAndUp } from '../../theme';

export const InputGroup = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediumAndUp`  
    flex-direction: row;
    flex-wrap: wrap;    
    justify-content: space-between;
  `}
`;

export const Label = styled.label`
  display: block;
`;
