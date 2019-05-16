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
    display: ${props => (props.show ? 'flex' : 'none')}
    flex-direction: column;
    align-items: center;
    .Link__item,.logo,.auth, .search{
        padding-bottom: 0.5em;
    }
    .Links{
        display:flex;
        flex-direction: column;
    }
    .auth{
        .auth__action{
            color: green;
        }
    }
    .form-control{
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
            .Links{
                flex-direction: row;
                .Link__item{
                    padding-left: 1em;
                }
            }
        `}
`;
