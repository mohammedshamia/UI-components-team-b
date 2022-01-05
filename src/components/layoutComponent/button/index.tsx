import { Button } from './style';
import { ButtonProps } from './interface';

export default function Btn({ children, ...props }: ButtonProps) {
  return (
    <Button type="button" {...props}>
      {children}
    </Button>
  );
}
