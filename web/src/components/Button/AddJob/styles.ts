import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 16.6px 29.8px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary};
  color: white;

  font-size: 36px;

  position: fixed;
  right: 35px;
  bottom: 25px;

  ${({ theme }) => theme.device.mobile()} {
    right: 25px;

    padding: 7.6px 20.8px;
  }
`;
