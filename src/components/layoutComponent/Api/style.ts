import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UL = styled.ul`
  list-style: none;
  &:before {
    content: '\2022';
    color: black;
    font-weight: bold;
    width: 1em;
  }
`;
export const LI = styled.li`
  text-decoration: underline;
  text-decoration-color: rgba(0, 127, 255, 0.4);
  background-color: rgba(102, 178, 255, 0.15);
  margin: 2px;
  color: #0072e5;
  padding: 0 5px;
  border-radius: 2px;
  font-family: PlusJakartaSans;
`;
