import React from 'react';
// import { data as inistialData } from './data';
import { Table, TBody, Th, Tr, Td, Container } from './style';
import Typography from '../../baseComponent/Typography';
import { IPropTable } from './interface';

interface ITableComponent {
  data?: IPropTable[];
  id?: string;
}

const tableHeader = (data = []) => {
  const head = Object.keys(data[0]);
  return head.slice(1).map((key: string, index) => {
    return <Th key={index}> {key} </Th>;
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
const TableProps: React.FC<ITableComponent> = ({
  data,
  id,
}: ITableComponent) => {
  return (
    <Container id={id}>
      <Typography variant="h2" children="API Props" bold />
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
