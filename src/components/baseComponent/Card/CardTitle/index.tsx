import React from 'react';
import CardTitle from './styles';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  color?: string;
  size?: string;
  align?: string;
}

function index(props: IProps) {
  return <CardTitle {...props} />;
}

export default index;
