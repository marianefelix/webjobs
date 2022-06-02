import { JobList } from 'pages/JobList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { light } from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <JobList />
    </ThemeProvider>
  );
};
