import React from 'react';
import CardSection from './styles';
import CardContent from './CardContent';
import CardImg from './CardImg';
import CardTitle from './CardTitle';
import CardDesc from './CardDesc';
import CardBtn from './CardBtn';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
const Card = (props: IProps) => {
  const { children } = props;
  return <CardSection {...props}>{children}</CardSection>;
};

export { Card, CardContent, CardImg, CardTitle, CardDesc, CardBtn };
