import React from 'react';
import { Data } from './Data';

const tableHeader = () => {
  const head = Object.keys(Data[0]);
  return head.map((key: string, index) => {
    return <th key={index}> {key} </th>;
  });
};
const bodyTable = () => {
  return Data.map(item => {
    const { Name, Type, Default, Description } = item;
    return (
      <tr key={item.id}>
        <td> {Name} </td>
        <td> {Type} </td>
        <td> {Default} </td>
        <td> {Description} </td>
      </tr>
    );
  });
};
export default function TableProps() {
  return (
    <div>
      <h1> component name</h1>
      <table>
        <tbody>
          <tr>{tableHeader()}</tr>
          {bodyTable()}
        </tbody>
      </table>
    </div>
  );
}
