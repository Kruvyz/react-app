import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediumAndUp } from '../../theme';

export const ProductCardIcon = styled.img`
  width: 100%;
`;

export const CardConreiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  padding: 15px;
  border: black 1px solid;
  text-align: center;
  ${mediumAndUp`
     max-width: 280px;
  `}
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  padding: 5px;
  margin: 10px;
  font-size: 20px;
`;

export const CardButton = styled.button`
  padding: 5px 10px;
  background-color: darkblue;
  border-color: darkblue;
  color: white;
  width: 100%;

  ${mediumAndUp`
    width: auto;
  `}
`;
