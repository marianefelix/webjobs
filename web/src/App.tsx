import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { light } from './styles/theme';
import { routes } from 'routes';
import { AuthContextProvider } from 'contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { JobContextProvider } from 'contexts/JobContext';

export const App = () => {
  return (
    <ThemeProvider theme={light}>
      <AuthContextProvider>
        <JobContextProvider>
          <GlobalStyle />
          <ToastContainer />
          <Routes>
            {routes.map(({ path, element }) => (
              <Route path={path} element={element} key={path} />
            ))}
          </Routes>
        </JobContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
};
