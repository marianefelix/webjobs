import { FilterChip } from '../FilterChip';
import { Box, ClearButton, Item, List } from './styled';

export const FilterBox = () => {
  return (
    <Box>
      <List>
        <Item>
          <FilterChip>Frontend</FilterChip>
        </Item>
        <Item>
          <FilterChip>Backend</FilterChip>
        </Item>
      </List>
      <ClearButton type="reset" onClick={() => {}}>
        Clear
      </ClearButton>
    </Box>
  );
};
