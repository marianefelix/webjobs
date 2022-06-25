import { InputHTMLAttributes } from 'react';
import { CheckboxInput, Label } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
}

export const Checkbox = ({ children, ...props }: CheckboxProps) => {
  return (
    <Label>
      <CheckboxInput type="checkbox" {...props} />
      {children}
    </Label>
  );
};
