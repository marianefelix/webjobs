import styled from 'styled-components';

interface ButtonContainerType {
  width?: string;
  padding?: string;
}

export const ButtonContainer = styled.button<ButtonContainerType>`
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: ${(props) => (props.padding ? props.padding : undefined)};

  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.card};

  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 18px;
  text-align: center;

  transition: all 0.3s;

  &:hover {
    filter: brightness(97%);
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;
