import { FilterChip } from '../FilterChip';
import { Box, ClearButton, Item, List } from './styles';

export const FilterBox = () => {
  return (
    <Box>
      <List>
        <Item>
          <FilterChip>Frontend</FilterChip>
        </Item>
        <Item>
          <FilterChip>Fullstack</FilterChip>
        </Item>
        <Item>
          <FilterChip>Javascript</FilterChip>
        </Item>
      </List>
      <ClearButton type="reset" onClick={() => {}}>
        Clear
      </ClearButton>
    </Box>
  );
};
