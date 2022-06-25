import styled from 'styled-components';

export const NewJobContainer = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  footer {
    width: 80%;
  }

  ${({ theme }) => theme.device.desktop()} {
    height: auto;

    footer {
      justify-content: center;
    } 
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.darkText};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 30px;
  width: 80%;
  margin: 36px 0;
  
  ${({ theme }) => theme.device.desktop()} {
    text-align: center;
  }
  
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2.5rem;
  column-gap: 2rem;

  & > input:nth-child(7) {
    grid-column: 2 span;
  }

  ${({ theme }) => theme.device.desktop()} {
    grid-template-columns: 1fr;
    gap: 1.5rem;

    & > input:nth-child(7) {
      grid-column: 1 span;
    }
  }

`;

export const CheckboxesContainer = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  ${({ theme }) => theme.device.desktop()} {
    flex-direction: column;
    button {
      font-size: ${({ theme }) => theme.font.size.medium};
    }
    button:first-child {
      width: 100%;
    }
  }
`;
