import styled from 'styled-components';

export const InputContainer = styled.input`
  background-color: ${({ theme }) => theme.color.lightCard};

  color: ${({ theme }) => theme.color.darkText};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  border: 1px solid ${({ theme }) => theme.color.lightCard};
  border-radius: ${({ theme }) => theme.borderRadius.card};

  padding: 15px 25px;
  width: 100%;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.font.size.medium};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }

  &:focus {
    outline: 0 !important;
    border-color: ${({ theme }) => theme.color.primary};
  }
`;
