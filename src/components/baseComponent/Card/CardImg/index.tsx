import React from 'react';
import Img from './styles';

interface IProps extends React.HTMLAttributes<HTMLImageElement> {
  src?: string;
}

function CardImg(props: IProps) {
  return <Img {...props} />;
}

export default CardImg;
