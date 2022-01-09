import React from 'react';
import CardSection from './styles';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  width?: string;
  height?: string;
  children: React.ReactNode;
}

const Card = (props: IProps) => {
  return <CardSection {...props} />;
};

export default Card;
