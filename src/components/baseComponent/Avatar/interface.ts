type ISize = 'small' | 'medium' | 'large' | 'xlarge';

export interface IAvatarProps {
  src?: string;
  alt?: string;
  size?: ISize;
  style?: React.CSSProperties;
  border?: boolean;
  shadow?: boolean;
  variant?: 'circle' | 'square';
}

export interface IAvatarGroupProps {
  max?: number;
  total?: number;
  children: React.ReactNode;
  shadow?: boolean;
}
