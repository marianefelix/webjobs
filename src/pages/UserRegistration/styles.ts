import styled from 'styled-components';

export const UserRegistrationContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 3.5rem 5rem 0 5rem;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  flex: 1;

  gap: 1.5rem;
`;

export const ImageSection = styled.section`
  display: flex;
  align-items: flex-end;

  svg {
    width: 90%;
    height: 70%;
  }

  ${({ theme }) => theme.device.desktop} {
    display: none;
  }
`;

export const RegistrationSection = styled.section`
  width: 70%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Description = styled.h3`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 30px;
  color: ${({ theme }) => theme.color.darkText};
`;

export const Form = styled.form`
  width: 100%;

  & > div:nth-child(1) {
    margin-bottom: 2rem;
  }

  & > div:nth-child(2) {
    margin-bottom: 3rem;
  }

  & > button {
    margin-right: 2rem;
  }
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
`;
