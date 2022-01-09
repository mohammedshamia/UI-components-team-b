import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarNav = styled.nav`
  margin-top: 64px;
  background: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
  box-shadow: 0px 0px 2px ${props => props.theme.text.secondary};
  overflow-y: auto;
  width: 240px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: 350ms;
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  width: 100%;
  margin-top: 1em;
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px 8px 24px;
  color: ${props => props.theme.text.primary};
  text-decoration: none;
  font-size: 0.875rem;
  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0;
  box-sizing: border-box;
  &:hover {
    background-color: ${props => props.theme.background.hover};
    cursor: pointer;
  }
  &:active {
    color: #1a2027;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 10px 0px 0px;
  padding: 5px 0px 5px 31px;
  background: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
  color: rgb(111, 126, 140);
  text-decoration: none;
  font-size: 0.6875rem;
  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  font-weight: 700;
  line-height: 1.5;
  box-sizing: border-box;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
`;

export const Icon = styled.svg`
  font-size: 1.03125rem;
  fill: currentColor;
  width: 2em;
  height: 1em;
  background: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
`;
