import styled from 'styled-components';

export const ButtonContainer = styled.button`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary};
  color: white;

  font-size: 30px;

  position: fixed;
  right: 25px;
  bottom: 25px;
`;
