import { ReactNode } from 'react';

export type TColor = {
  fill: string;
  unfill: string;
};
export type TSize = 'small' | 'large' | 'medium';

export interface IShared {
  disabled: boolean;
  readonly: boolean;
  precision: number;
  color: TColor;
  value: number;
}
export interface ISvgProps extends IShared {
  colorFill?: string;
  width: number;
  setvalue: React.Dispatch<React.SetStateAction<number>>;
  ishover: number;
  setHover: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
  index: number;
  icon?: ReactNode;
  emptyIcon?: ReactNode;
}

export interface PropsRating extends IShared {
  isRow?: boolean;
  className?: string;
  style?: CSSProperties;
  defaultValue?: number;
  count?: number;
  size: TSize;
  emptyLabelText?: string;
  name: string;
  getLabelText?: (value: number) => string;

  name?:
    | 'simple-controlled'
    | 'read-only'
    | 'disabled'
    | 'half-rating'
    | 'half-rating-read'
    | 'hover-feedback'
    | 'size-small'
    | 'size-medium';
}
