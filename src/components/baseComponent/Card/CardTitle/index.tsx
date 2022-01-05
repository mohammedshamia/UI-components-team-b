import React from 'react';
import CardTitle from './styles';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  color?: string;
  size?: string;
  align?: string;
}

function index(props: IProps) {
  const { children, color, size, align } = props;
  return (
    <CardTitle color={color} size={size} align={align} {...props}>
      {children}
    </CardTitle>
  );
}

export default index;
