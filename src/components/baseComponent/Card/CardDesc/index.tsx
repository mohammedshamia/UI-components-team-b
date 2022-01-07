import React from 'react';
import CardDesc from './styles';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  color?: string;
  size?: string;
  align?: string;
}

function index(props: IProps) {
  const { children, color, size, align } = props;
  return (
    <CardDesc color={color} size={size} align={align} {...props}>
      {children}
    </CardDesc>
  );
}

export default index;
