import { InputHTMLAttributes } from 'react';
import { InputContainer } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const Input = ({ ...props }: InputProps) => {
  return <InputContainer {...props} />;
};
