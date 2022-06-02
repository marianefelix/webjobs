import { PrimaryButton } from 'components/Button/Primary';
import { SecondaryButton } from 'components/Button/Secondary';
import { TextButton } from 'components/Button/Text';
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

      <TextButton>Sign In</TextButton>

      <SecondaryButton width="126px" padding="15px 25px">
        Sign Up
      </SecondaryButton>
    </ThemeProvider>
  );
};
