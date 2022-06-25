import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

type AddJobButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const AddJobButton = (props: AddJobButtonProps) => {
  return (
    <ButtonContainer title="Add job" {...props}>
      +
    </ButtonContainer>
  );
};
