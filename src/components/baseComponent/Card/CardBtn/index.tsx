import React from 'react';
import CardBtn from './styles';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bgColor?: string;
  color?: string;
  size?: string;
}

function index(props: IProps) {
  const { children, bgColor, color, size } = props;
  return (
    <CardBtn bgColor={bgColor} color={color} size={size} {...props}>
      {children}
    </CardBtn>
  );
}

export default index;
