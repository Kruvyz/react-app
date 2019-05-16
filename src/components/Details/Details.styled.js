import styled from 'styled-components';
import { mediumAndUp } from '../../theme';

export const Conteiner = styled.div`
  text-align: center;

  ${mediumAndUp`
    display: flex;
    justify-content: space-around;
  `}
`;

export const DetailsImg = styled.img`
  display: block;
  width: 100%;

  ${mediumAndUp`
    width: 30em;
    height: 30em;
    margin: 10px;
  `}
`;

export const Button = styled.button`
  background-color: darkblue;
  border-color: darkblue;
  color: white;
  width: 100%;
  outline: 0;
  margin: 10px 0;
  padding: 5px 10px;

  ${mediumAndUp`
    width: auto;
  `}
`;

export const Title = styled.h2`
  border-bottom: 1px solid black;
  width: 100%;
`;

export const InfoConteiner = styled.div`
  padding: 20px;
  width: 50%;
  text-align: left;
`;
