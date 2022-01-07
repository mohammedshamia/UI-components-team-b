import React from 'react';
import { Data } from './Data';
import { Table, TBody, Th, Tr, Td, Container } from './style';
import Typography from '../../baseComponent/Typography';

const tableHeader = () => {
  const head = Object.keys(Data[0]);
  return head.slice(1).map((key: string, index) => {
    return <Th key={index}> {key} </Th>;
  });
};
const bodyTable = () => {
  return Data.map(item => {
    const { Name, Type, Default, Description } = item;
    return (
      <Tr key={item.id}>
        <Td> {Name} </Td>
        <Td> {Type} </Td>
        <Td> {Default} </Td>
        <Td> {Description} </Td>
      </Tr>
    );
  });
};
export default function TableProps() {
  return (
    <Container>
      <Typography variant="h2" children="API Props" bold />
      <Table>
        <TBody>
          <Tr>{tableHeader()}</Tr>
          {bodyTable()}
        </TBody>
      </Table>
    </Container>
  );
}
