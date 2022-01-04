import React from 'react';
import { CSSProperties } from 'styled-components';
import WrapperParent from './style';

type TSize = 'small' | 'large' | 'medium';
interface Props {
  isRequired?: boolean;
  isRow?: boolean;
  className?: string;
  style?: CSSProperties;
  size?: TSize;
}

const getMyWidth = (size: TSize) => {
  switch (size) {
    case 'small':
      return 20;
    case 'large':
      return 30;
    case 'medium':
      return 40;
    default:
      return 20;
  }
};

interface IImagesTART {
  colorFill?: string;
  size: TSize;
}

const ImagesTART = ({ colorFill = 'none', size }: IImagesTART) => {
  const width = getMyWidth(size);
  const handelBlur = (e: React.MouseEvent<HTMLDivElement, Element>) => {
    console.log('handelBlur', e);
  };
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill={colorFill}
        width={width}
        viewBox="0 0 24 24"
        stroke="red"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="bevel"
          strokeWidth="1"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </div>
  );
};
const Rating = ({ isRow, ...props }: Props) => {
  return (
    <div>
      <WrapperParent FD={isRow ? 'row' : 'column'}>
        {Array(5)
          .fill(0)
          .map(x => (
            <ImagesTART size="medium" />
          ))}
      </WrapperParent>
    </div>
  );
};

export default Rating;
