import styled from 'styled-components';

interface TagContainerType {
  selected: boolean;
}

export const TagContainer = styled.button<TagContainerType>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.primary : theme.color.lightTag};
  color: ${({ theme, selected }) =>
    selected ? theme.color.lightTag : theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border-radius: ${({ theme }) => theme.borderRadius.tag};
  padding: 8px 10px;

  transition: filter(0.2s);

  &:hover,
  &:focus {
    filter: ${({ selected }) => (selected ? undefined : 'brightness(95%)')};
  }
`;
