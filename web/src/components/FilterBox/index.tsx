import { Filter } from 'models/filters';
import { FilterChip } from '../FilterChip';
import { Box, ClearButton, Item, List } from './styles';

interface FilterBoxProps {
  filters: Filter[];
  onChange: (newFilters: Filter[]) => void;
}

export const FilterBox = ({ filters, onChange }: FilterBoxProps) => {
  return (
    <Box>
      <List>
        {filters.map((filter) => (
          <Item key={filter}>
            <FilterChip
              onDelete={() =>
                onChange(filters.filter((item) => item !== filter))
              }
            >
              {filter}
            </FilterChip>
          </Item>
        ))}
      </List>
      <ClearButton type="reset" onClick={() => onChange([])}>
        Clear
      </ClearButton>
    </Box>
  );
};
