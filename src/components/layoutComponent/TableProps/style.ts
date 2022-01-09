import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  algin-items: center;
  flex-direction: column; ;
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
  /* color: ; */
  /* color: #3e5060; */
  color: ${props => props.theme.text.primary};
  border-bottom: 1px solid #3e5060;
  background: ${props => props.theme.background.paper};
`;
export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
export const TBody = styled.tbody``;
export const Th = styled.th`
  font-size: 16px;
  font-weight: 500;
  height: 96px;
  line-height: 24px;
  margin: 0px;
  padding: 16px;
  width: 161px;
  color: ${props => props.theme.text.primary};
  /* color:  ${props => props?.color || props.theme.text.primary} */

  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  border: 1px solid #ddd;
  padding: 8px;
`;
