import React from 'react';
import CardBtn from './styles';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bgColor?: string;
  color?: string;
  size?: string;
}

function index(props: IProps) {
  return <CardBtn {...props} />;
}

export default index;
