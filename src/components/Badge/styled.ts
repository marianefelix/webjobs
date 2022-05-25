import styled from 'styled-components';

interface BadgeType {
  type: 'new' | 'featured';
}

export const BadgeContainer = styled.div<BadgeType>`
  width: fit-content;
  background-color: ${({ theme, type }) =>
    type === 'new' ? theme.color.primary : theme.color.dark};

  padding: 6px 8px;

  display: flex;
  align-items: center;

  border-radius: ${({ theme }) => theme.borderRadius.badge};
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.lightCard};
  text-align: center;
  text-transform: uppercase;

  font-size: ${({ theme }) => theme.font.size.xSmall};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
