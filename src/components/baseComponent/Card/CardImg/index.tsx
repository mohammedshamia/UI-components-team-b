import React from 'react';
import Img from './styles';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: string;
  height?: string;
}

function CardImg({ width, height, ...rest }: IProps) {
  return <Img width={width} height={height} {...rest} />;
}

export default CardImg;
