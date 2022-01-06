import React from 'react';
import CardSection from './styles';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
const Card = (props: IProps) => {
  const { children } = props;
  return <CardSection {...props}>{children}</CardSection>;
};

export default Card;
