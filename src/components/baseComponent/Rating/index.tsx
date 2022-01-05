import React, { useMemo, useState } from 'react';
import { CSSProperties } from 'styled-components';
import WrapperParent, { WrapperParentStart } from './style';

type TSize = 'small' | 'large' | 'medium';
interface Props {
  readonly?: boolean;
  isRow?: boolean;
  className?: string;
  style?: CSSProperties;
  size?: TSize;
  defaultValue?: number;
  value?: number;
  count?: number;
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

interface IImagesTART extends Props {
  colorFill?: string;
  size: TSize;
}

const ImagesTART = ({
  colorFill = 'none',
  size,
  readonly = false,
  ...props
}: IImagesTART) => {
  const [isFill, setiIsFill] = useState<boolean>(false);
  const width = getMyWidth(size);
  useMemo(() => console.log('enter  to  this  section whant'), [isFill]);
  const handelMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    console.log('handelBlur', e);
    setiIsFill(!isFill);
  };

  return (
    <WrapperParentStart
      readonly={readonly}
      onMouseEnter={!readonly ? handelMouseEnter : undefined}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill={!isFill ? colorFill : 'red'}
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
    </WrapperParentStart>
  );
};
const Rating = ({ isRow, count = 5, ...props }: Props) => {
  return (
    <div>
      <WrapperParent {...props} FD={isRow ? 'row' : 'column'}>
        {Array(count)
          .fill(0)
          .map(x => (
            <ImagesTART size="medium" />
          ))}
      </WrapperParent>
    </div>
  );
};

export default Rating;
