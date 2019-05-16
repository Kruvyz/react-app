import styled from 'styled-components';

export const CartItemConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d1d1d1;
  border-radius: 10px;
  margin: 0.5em;
  padding: 0.5em;
`;

export const CartItemBox = styled.div`
  flex-grow: 1;
  text-align: center;
  margin: 10px;
`;

export const CartItemIcon = styled.img`
  max-width: 50px;
  max-height: 50px;
`;
