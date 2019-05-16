import styled from 'styled-components';
import { mediumAndUp } from '../../theme';

const Total = styled.div`
  margin: 20px;
  text-align: center;

  ${mediumAndUp`
    text-align: right;
  `}
`;

export default Total;
