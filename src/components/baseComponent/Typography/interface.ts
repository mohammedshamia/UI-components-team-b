import { CSSProperties } from 'react';

export interface IPropTypography {
  color: string;
  children: string | JSX.Element | JSX.Element[] | undefined;
  variant?: variantMapping;
  fontSize?: string;
  style?: CSSProperties;
  bold?: boolean | string;
}

type variantMapping = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
