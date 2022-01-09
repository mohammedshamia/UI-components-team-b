import React from 'react';
import { Table, TBody, Th, Tr, Td, Container } from './style';
import Typography from '../../baseComponent/Typography';
import { IPropTable } from './interface';

interface ITableComponent {
  data?: IPropTable[];
}

const tableHeader = (data = []) => {
  const head = Object.keys(data[0]);
  return head.slice(1).map((key: string, index) => {
    return <Th key={index.toString()}> {key} </Th>;
  });
};
const bodyTable = (data = []) => {
  return data.map(({ id, Name, Type, Default, Description }) => {
    return (
      <Tr key={id} color="#3e5060">
        <Td> {Name} </Td>
        <Td> {Type} </Td>
        <Td> {Default} </Td>
        <Td> {Description} </Td>
      </Tr>
    );
  });
};
const TableProps: React.FC<ITableComponent> = ({ data }: ITableComponent) => {
  return (
    <Container>
      <Typography variant="h3" children="API Props" bold color="" />
      <Table>
        <TBody>
          {data && <Tr>{tableHeader(data as [])}</Tr>}
          {bodyTable(data as [])}
        </TBody>
      </Table>
    </Container>
  );
};
export default TableProps;
