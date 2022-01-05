import React from 'react';
import Img from './styles';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
}

function CardImg(props: IProps) {
  const { src } = props;
  return <Img {...props} src={src} />;
}

export default CardImg;
