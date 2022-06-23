import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  padding: 3.5rem 5rem 0 5rem;

  background-color: ${({ theme }) => theme.color.lightBackground};

  ${({ theme }) => theme.device.mobile()} {
    padding: 3.5rem 3.5rem 0 3.5rem;

    & > footer {
      padding-bottom: 1.5rem;
      justify-content: center;
    }
  }
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.device.mobile()} {
    flex-direction: column;
    align-items: start;

    gap: 2rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 2.5rem;

  ${({ theme }) => theme.device.mobile()} {
    & > button {
      font-size: 97%;
    }

    & > button:last-child {
      width: 115px;
      padding: 10px 20px;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex: 1;

  margin-top: 3.5rem;

  ${({ theme }) => theme.device.mobile()} {
    justify-content: flex-start;

    margin-bottom: 50px;
  }
`;

export const DescriptionSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  ${({ theme }) => theme.device.mobile()} {
    & > div:last-child {
      width: 100%;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;

export const Description = styled.h1`
  max-width: 400px;

  color: ${({ theme }) => theme.color.darkText};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 35px;
  line-height: 45px;

  ${({ theme }) => theme.device.mobile()} {
    font-size: calc((80 / 100) * 35px);
    line-height: 35px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  padding: 15px 0;

  ${({ theme }) => theme.device.mobile()} {
    gap: 1.5rem;

    & > button {
      font-size: ${({ theme }) => theme.font.size.medium};
    }

    &:first-child > button {
      width: 150px;
      padding: 15px 25px;
    }
  }
`;

export const BoxDescription = styled.p`
  max-width: 15rem;

  font-size: 22px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 30px;
  color: ${({ theme }) => theme.color.darkText};

  ${({ theme }) => theme.device.mobile()} {
    max-width: 13rem;
    font-size: ${({ theme }) => theme.font.size.large};
  }
`;

export const Divider = styled.hr`
  border: 1px solid #e3d8d8;
  background-color: #e3d8d8;
  height: 100%;

  ${({ theme }) => theme.device.mobile()} {
    width: 100%;
  }
`;

export const ImageSection = styled.section`
  display: flex;
  justify-content: flex-end;

  svg {
    width: 95%;
    height: 70%;

    justify-self: end;
    align-self: end;
  }

  ${({ theme }) => theme.device.desktop('max-width')} {
    display: none;
  }
`;
