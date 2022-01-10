import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
// import { Link } from 'react-scroll';

const MainLayout = styled('div')`
  background: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.5rem;
`;

export default MainLayout;

export const Contents = styled('h3')`
  background: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
  font-size: 22px;
  padding: 20px;
  padding-bottom: 8px;
  font-weight: 700;
  height: 17px;
  line-height: 16.5px;
  margin: 16px 0px 8px;
  font-weight: 700;
  height: 17px;
  line-height: 16.5px;
  margin: 16px 0px 8px;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
`;
export const LinkItem = styled(NavLink)<{ isActive?: boolean }>`
  font-size: 18px;
  color: ${props => props.theme.text.primary};
  font-weight: 500;
  padding: 10px 0 10px 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  &:hover {
    border-left: 1px solid ${props => props.theme.text.disable};
    color: ${props => props.theme.text.disable};
    ${props =>
      props.isActive &&
      css`
        border-left: ${`1px solid  ${props.theme.primary.dark}`};
        color: ${props.theme.primary.dark};
      `}
  }
  ${props =>
    props.isActive &&
    css`
      border-left: ${`1px solid  ${props.theme.primary.main}`};
      color: ${props.theme.primary.main};
    `}
`;

export const LeftSide = styled('div')`
  background: ${props => props.theme.background.default};
  grid-column: span 1 / span 1;
  padding: 10px;
  color: ${props => props.theme.text.primary};

  height: 100%;
  & + div {
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;
export const ContentSide = styled('div')`
  grid-column: span 3 / span 3;
  background: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
`;
export const RightSide = styled('div')`
  position: fixed;
  right: 0;
  grid-column: span 1 / span 1;
  background: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
  height: 100%;
  min-width: 240px;

  margin-top: 4em;
`;

export const HeaderLeft = styled('div')`
  background: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
`;
