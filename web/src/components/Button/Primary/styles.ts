import styled, { keyframes } from 'styled-components';

interface ButtonContainerType {
  width?: string;
  padding?: string;
}

export const ButtonContainer = styled.button<ButtonContainerType>`
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: ${(props) => (props.padding ? props.padding : undefined)};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

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

  &:disabled {
    filter: brightness(85%);
    box-shadow: none;
    cursor: default;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const CircleProgress = styled.div`
  width: 20px;
  height: 20px;

  border: 3px solid white;
  border-radius: 50%;
  border-right-color: transparent;
  border-bottom-color: transparent;

  transition: all 0.5s ease-in;

  animation-name: ${rotate};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
