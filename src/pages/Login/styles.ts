import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.device.mobile()} {
    padding: 0 3.5rem;
  }

  & > footer {
    position: absolute;
    bottom: 0;
  }
`;

export const WelcomeText = styled.h2`
  color: ${({ theme }) => theme.color.darkText};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: 30px;
  text-align: center;
  line-height: 1;

  margin-bottom: 20px;
`;

export const ImageSection = styled.section`
  ${({ theme }) => theme.device.desktop()} {
    display: none;
  }

  position: absolute;
  left: -162px;
  bottom: 0;

  svg {
    height: 450px;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  & > div {
    width: 500px;

    button {
      margin-top: 10px;
    }
  }

  ${({ theme }) => theme.device.mobile()} {
    width: 100%;
    & > div {
      width: 100%;
      padding: 40px 36px 60px;
    }
  }

  & > svg:first-child {
    margin-bottom: 60px;
  }
`;
