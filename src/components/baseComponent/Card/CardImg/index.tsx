import React from 'react';
import Img from './styles';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: string;
  height?: string;
}

function CardImg({ ...rest }: IProps) {
  return <Img {...rest} />;
}

export default CardImg;
