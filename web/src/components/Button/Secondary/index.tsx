import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  padding?: string;
  children: string;
}

export const SecondaryButton = ({
  width,
  padding,
  children,
  ...props
}: SecondaryButtonProps) => {
  return (
    <ButtonContainer width={width} padding={padding} {...props}>
      {children}
    </ButtonContainer>
  );
};
