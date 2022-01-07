import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const MainLayout = styled('div')`
  /* background: red; */
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.5rem;
`;

export default MainLayout;

export const Contents = styled('h3')`
  color: #6f7e8c;
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
  color: rgb(111, 126, 140);
`;
export const LinkItem = styled(NavLink)<{ isActive?: boolean }>`
  color: black;
  font-size: 22px;
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
    border-left: 1px solid black;
    color: #0072e5;
  }
  ${props =>
    props.isActive &&
    css`
      border-left: 1px solid #0072e5;
    `}
`;

export const LeftSide = styled('div')`
  background: #f2f2f2;
  grid-column: span 1 / span 1;
  border-right-width: 2px;
  height: 100%;
  & + div {
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;
export const ContentSide = styled('div')`
  background: white;
  grid-column: span 3 / span 3;
  border-left-width: 2px;
`;
export const RightSide = styled('div')`
  grid-column: span 1 / span 1;
  border-left-width: 2px;
  background: #f2f2f2;
  color: #1a2027;
  font-size: 16px;
  font-weight: 400;
  height: 565px;
  line-height: 24px;
  margin: 60px 0px 0px;
  padding: 16px 32px 16px 0px;
  min-width: 240px;
  /* padding-left: 20px; */
`;
