import { ReactNode } from 'react';

export type TChildrenPath = {
  label: string;
  toId: string;
};
export type PathItem = {
  path: string;
  element?: ReactNode;
  items: TChildrenPath[];
};
