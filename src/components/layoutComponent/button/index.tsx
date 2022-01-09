import { Button } from './style';
import { ButtonProps } from './interface';

export default function Btn({ children, ...props }: ButtonProps) {
  return <Button {...props}>{children}</Button>;
}
