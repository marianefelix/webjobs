import { ReactNode } from 'react';
import { FilterChipContainer, CloseButton, CloseIcon, Text } from './styles';

interface FilterChipProps {
  children: ReactNode;
  onDelete: () => void;
}

export const FilterChip = ({
  children,
  onDelete,
  ...props
}: FilterChipProps) => {
  return (
    <FilterChipContainer {...props}>
      <Text>{children}</Text>
      <CloseButton title="Remover filtro" onClick={onDelete}>
        <CloseIcon aria-label="Remover filtro" />
      </CloseButton>
    </FilterChipContainer>
  );
};
