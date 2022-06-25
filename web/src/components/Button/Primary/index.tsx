import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  padding?: string;
  children: string;
}

export const PrimaryButton = ({
  width,
  padding,
  children,
  ...props
}: PrimaryButtonProps) => {
  return (
    <ButtonContainer width={width} padding={padding} {...props}>
      {children}
    </ButtonContainer>
  );
};
