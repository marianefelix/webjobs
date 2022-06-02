import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 3.5rem 6rem 0 6rem;

  background-color: ${({ theme }) => theme.color.lightBackground};
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 2.5rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  margin-top: 3.5rem;
`;

export const Description = styled.h1`
  max-width: 400px;

  color: ${({ theme }) => theme.color.darkText};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 35px;
  line-height: 45px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  padding: 20px 0;
`;

export const BoxDescription = styled.p`
  max-width: 15rem;

  font-size: 22px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 30px;
  color: ${({ theme }) => theme.color.darkText};
`;

export const Divider = styled.hr`
  border: 1px solid #e3d8d8;
  height: 100%;
`;
