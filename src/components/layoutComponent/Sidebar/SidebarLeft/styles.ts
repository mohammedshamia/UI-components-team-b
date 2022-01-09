import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarNav = styled.nav`
  margin-top: 64px;
  background-color: ${props => props.theme.background.default};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  overflow-y: auto;
  width: 19.8%;
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
`;

export const SidebarLink = styled(NavLink)`
  color: ${props => props.theme.text.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px 8px 24px;
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
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
  &:active {
    color: #1a2027;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(NavLink)<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 7px 0px 7px 31px;
  ${props =>
    props.isActive
      ? `color :${props.theme.primary.main};background-color:${props.theme.primary.light}`
      : `color :${props.theme.text.primary};background:${props.theme.background.default}`};
  text-decoration: none;
  font-size: 0.875rem;
  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  letter-spacing: 0;
  text-decoration: none;
  font-weight: 500;
  line-height: 1.5;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    color: ${props => props.theme.text.primary};
    background: ${props => props.theme.primary.light};
  }
`;

export const Icon = styled.svg`
  font-size: 1.03125rem;
  fill: currentColor;
  width: 2em;
  height: 1em;
  color: #007fff;
`;
