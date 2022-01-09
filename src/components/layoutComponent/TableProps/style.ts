import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  algin-items: center;
  flex-direction: column;
  margin-top: 20px;
`;
export const Table = styled.table`
  display: flex;
  justify-content: space-between;
  border-collapse: collapse;
  width: 100%;
  font-family: 'IBM Plex Sans';
  margin: 20px;
`;
export const TR = styled.tr`
  display: flex;
`;
export const Tr = styled.tr`
  color: ${props => props.theme.text.primary};
  border-bottom: 1px solid #3e5060;
`;
export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
export const TBody = styled.tbody``;
export const Th = styled.th`
  font-size: 1rem;
  text-align: center;
  font-weight: 800;
  font-family: 'IBM Plex Sans';

  margin: 0px;
  padding: 1rem;
  width: 161px;
  color: ${props => props.theme.text.primary};
  padding-top: 12px;
  padding-bottom: 12px;
  border: 1px solid #ddd;
  padding: 8px;
`;
