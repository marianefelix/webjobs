import { ReactNode } from 'react';
import { FilterChipContainer, CloseButton, CloseIcon, Text } from './styles';

interface FilterChipProps {
  children: ReactNode;
}

export const FilterChip = ({ children, ...props }: FilterChipProps) => {
  return (
    <FilterChipContainer {...props}>
      <Text>{children}</Text>
      <CloseButton title="Remover filtro">
        <CloseIcon aria-label="Remover filtro" />
      </CloseButton>
    </FilterChipContainer>
  );
};
