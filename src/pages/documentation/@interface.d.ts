interface DocsProps {
  type: 'Typography' | 'InfoContainer';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  size?: string;
  src?: string;
  width?: string;
  height?: string;
  alt?: string;
  children?: any;
  style?: React.CSSProperties;
  bold?: boolean;
  [key: string]: any;
}
