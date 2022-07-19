import styled from 'styled-components';
import icon from 'assets/icons/icon-check.svg';

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.darkText};

  display: grid;
  grid-template-columns: 1em auto;

  gap: 14px;

  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.color.lightGrey};
  margin: 0;

  height: 20px;
  width: 19px;

  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.card};

  display: grid;
  place-content: center;

  cursor: pointer;

  &::before {
    content: '';
    transform: scale(0);
    transition: 120ms transform ease-in-out;

    height: 20px;
    width: 19px;

    background-color: ${({ theme }) => theme.color.primary};
    background-image: url(${icon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 65%;

    border-radius: ${({ theme }) => theme.borderRadius.card};
  }

  &:checked::before {
    transform: scale(1);
  }
`;
