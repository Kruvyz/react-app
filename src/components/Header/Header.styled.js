import styled from 'styled-components';
import { smallAndLow, mediumAndUp } from '../../theme';

export const HeaderContainer = styled.div`
  position: relative;
  min-height: 3em;
  background: #f4f4f4;
`;

export const HamburgerIcon = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  cursor: pointer;
  ${mediumAndUp`
        display: none;
    `}
`;

export const HeaderStyle = styled.div`
    padding: 1.5em;
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    
    .Links {
        display: flex;
        flex-dicoration: column;
    }
    .auth {
        .auth__action {
            color: green;
        }
    }
    .form-control {
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
    }
    ${mediumAndUp`
            padding: 1em;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            .Links {
                flex-direction: row;
                .Link__item {
                    padding-left: 1em;
                }
            }
        `}
`;

export const Logo = styled.div`
    font-size: 30px;
    font-weight: 900;
    text-shadow: 1px 1px black;
    color: darkblue;
`;