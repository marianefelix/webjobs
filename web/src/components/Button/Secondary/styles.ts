import styled from 'styled-components';

interface ButtonContainerType {
  width?: string;
  padding?: string;
}

export const ButtonContainer = styled.button<ButtonContainerType>`
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: ${(props) => (props.padding ? props.padding : undefined)};

  background-color: transparent;
  color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.card};
  border: 2px solid ${({ theme }) => theme.color.primary};

  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  line-height: 18px;
  text-align: center;

  transition: all 0.3s;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;
