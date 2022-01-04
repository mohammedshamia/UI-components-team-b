type ISize = 'small' | 'medium' | 'large' | 'xlarge';

interface IAvatarProps {
  src?: string;
  alt?: string;
  size?: ISize;
  style?: React.CSSProperties;
  border?: boolean;
  shadow?: boolean;
}

export default IAvatarProps;
