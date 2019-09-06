import  styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediumAndUp } from '../../theme';

const LinkItem = styled(Link)`
  padding-bottom: 0.5em;
  text-decoration: none;
  color: darkblue;
  display: block;
  
  ${mediumAndUp`
    padding-left: 1em;
  `}
`;

export default LinkItem;