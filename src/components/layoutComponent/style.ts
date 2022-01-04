import styled from 'styled-components';

const MainLayout = styled('div')`
  background: red;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.5rem;
`;

export default MainLayout;

export const LeftSide = styled('div')`
  background: green;
  grid-column: span 1 / span 1;
  border-right-width: 2px;
  & + div {
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;
export const ContentSide = styled('div')`
  background: green;
  grid-column: span 3 / span 3;
  border-left-width: 2px;
`;
export const RightSide = styled('div')`
  grid-column: span 1 / span 1;
  border-left-width: 2px;
`;
