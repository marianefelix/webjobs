import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  margin-top: -30px;
  @media screen and (max-width: 576px) {
    gap: 38px;
  }
`;

export const AbsoluteBox = styled.div`
  width: 80%;
  margin-bottom: 32px;

  @media screen and (max-width: 576px) {
    margin-bottom: 16px;
  }
`;
