import { PrimaryButton } from 'components/Button/Primary';
import { SecondaryButton } from 'components/Button/Secondary';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { light } from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <PrimaryButton width="269px" padding="25px 55px">
        I'M A COMPANY
      </PrimaryButton>

      <SecondaryButton width="126px" padding="15px 25px">
        Sign Up
      </SecondaryButton>
    </ThemeProvider>
  );
};
