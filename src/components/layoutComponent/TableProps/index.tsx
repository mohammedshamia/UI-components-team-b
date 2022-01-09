import React from 'react';
import { data as inistialData } from './data';
import { Table, TBody, Th, Tr, Td, Container } from './style';
import Typography from '../../baseComponent/Typography';
import { IPropTable } from './interface';

interface ITableComponent {
  data?: IPropTable[] ;
}

const tableHeader = ({ data = [] }: ITableComponent) => {
  const head = Object.keys(data[0]);
  return head.slice(1).map((key: string, index) => {
    return <Th key={index}> {key} </Th>;
  });
};
const bodyTable = ({ data = [] }: ITableComponent) => {
  return data.map(item => {
    const { Name, Type, Default, Description } = item;
    return (
      <Tr key={item.id} color="#3e5060">
        <Td> {Name} </Td>
        <Td> {Type} </Td>
        <Td> {Default} </Td>
        <Td> {Description} </Td>
      </Tr>
    );
  });
};
const TableProps: React.FC<ITableComponent> = ({
  data = [],
}: ITableComponent) => {
  return (
    <Container>
      <Typography variant="h2" children="API Props" bold />
      <Table>
        <TBody>
          <Tr>{tableHeader(data)}</Tr>
          {bodyTable(data)}
        </TBody>
      </Table>
    </Container>
  );
};
export default TableProps;
