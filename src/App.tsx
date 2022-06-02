import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { light } from './styles/theme';
import { routes } from 'routes';

export const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </ThemeProvider>
  );
};
