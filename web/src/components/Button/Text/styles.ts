import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: fit-content;
  background-color: transparent;
  color: ${({ theme }) => theme.color.primary};

  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  line-height: 20px;
  text-align: center;

  transition: all 0.3s;

  &:hover {
  }
`;
