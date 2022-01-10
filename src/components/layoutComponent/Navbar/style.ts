import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Iprops {
  IsMainPage: boolean;
}
export const NavbarComponent = styled.div<Iprops>`
  z-index: 999;
  position: fixed;
  width: 100%;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  box-shadow: ${props =>
    props.IsMainPage
      ? `0px 0px 1px ${props.theme.text.secondary}`
      : '0px 0px 7px rgba(0, 0, 0, 0.8)'};
  padding: 1rem 9.3%;
  background: ${props => props.theme.background.blur};
  backdrop-filter: blur(5px);
  justify-content: space-between;
`;

export const NavbarLink = styled(Link)`
  color: ${props => props.theme.text.primary};
  padding: 10px;
  border-radius: 10px;
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.text.secondary}
`;

export const NavbarSearchContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const NavbarLinksIcon = styled.i`
  color: ${props => props.theme.text.primary};
  margin-left: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: ${props => props.theme.background.paper};
  border-radius: 10px;
  box-shadow: 0px 0px 2px ${props => props.theme.text.disable};
  border: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 4px ${props => props.theme.text.secondary};
  }
`;
