import React from 'react';
import CardContent from './styles';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

function index(props: IProps) {
  const { children } = props;
  return <CardContent {...props}>{children}</CardContent>;
}

export default index;
