import { PrimaryButton } from 'components/Button/Primary';
import { JobList } from 'pages/JobList';
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
    </ThemeProvider>
  );
};
