import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/icons/icon-remove.svg';

export const FilterChipContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.tag};
  display: flex;
`;

export const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: background-color(0.2s);

  border-radius: ${({ theme }) =>
    `0px ${theme.borderRadius.tag} ${theme.borderRadius.tag} 0px`};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color.dark};
  }
`;

export const Text = styled.span`
  background-color: ${({ theme }) => theme.color.lightTag};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 8px 10px;
`;

export const CloseIcon = styled(Icon)`
  path {
    fill: ${({ theme }) => theme.color.lightTag};
  }
`;
