import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const TextButton = ({ children, ...props }: TextButtonProps) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};
