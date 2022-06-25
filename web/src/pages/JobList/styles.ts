import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  padding-bottom: 22px;

  margin-top: -30px;
  ${({ theme }) => theme.device.mobile()} {
    gap: 38px;
  }
`;

export const AbsoluteBox = styled.div`
  width: 80%;
  margin-bottom: 32px;

  ${({ theme }) => theme.device.mobile()} {
    margin-bottom: 16px;
  }
`;
