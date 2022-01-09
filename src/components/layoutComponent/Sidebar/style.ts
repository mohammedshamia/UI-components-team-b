import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';

const MainLayout = styled('div')`
  background: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
  width: 100vw;
  height: 100vh;
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
  padding: 20px 0px;
  display: block;
  padding: 10px 0px;
  padding-left: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 8px 0px;
  text-decoration: none;
  &:hover {
    ${props =>
      props.isActive &&
      css`
        border-left: ${`1px solid  ${props.theme.secondary.main}`};
        color: #0072e5;
      `}
  }
  ${props =>
    props.isActive &&
    css`
      border-left: ${`1px solid  ${props.theme.secondary.main}`};
      color: #0072e5;
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
  /* background: white; */
  grid-column: span 3 / span 3;
  background: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
`;
export const RightSide = styled('div')`
  grid-column: span 1 / span 1;
  background: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
  color: #1a2027;
  height: 100%;
  min-width: 240px;
  /* padding-left: 20px; */
`;

export const HeaderLeft = styled('div')`
  background: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
`;
