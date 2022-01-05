import React from 'react';

export interface ButtonProps {
  border?: string;
  color?: string;
  children?: string | React.ReactNode;
  height: string;
  width: string;
  onClick?: () => void;
  bold: boolean;
  backgroundColor?: string;
  fontSize?: string;
}
