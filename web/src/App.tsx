import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { light } from './styles/theme';
import { routes } from 'routes';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'services/queryClient';

export const App = () => {
  return (
    <ThemeProvider theme={light}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
