import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer, CircleProgress } from './styles';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  padding?: string;
  isLoading?: boolean;
  children: string;
}

export const PrimaryButton = ({
  width,
  padding,
  isLoading,
  children,
  ...props
}: PrimaryButtonProps) => {
  return (
    <ButtonContainer
      width={width}
      padding={padding}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <CircleProgress />}
      {children}
    </ButtonContainer>
  );
};
