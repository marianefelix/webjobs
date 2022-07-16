import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import { light } from './styles/theme';

import { routes } from 'routes';

import { PrivateRoute } from 'routes/PrivateRoute';

import { AuthContextProvider } from 'contexts/AuthContext';
import { JobContextProvider } from 'contexts/JobContext';

import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {
  return (
    <ThemeProvider theme={light}>
      <AuthContextProvider>
        <JobContextProvider>
          <GlobalStyle />
          <ToastContainer />
          <Routes>
            {routes.map(({ path, isPrivate, element }) => {
              if (isPrivate) {
                return (
                  <Route path={path} element={<PrivateRoute />} key={path} />
                );
              }

              return <Route path={path} element={element} key={path} />;
            })}
          </Routes>
        </JobContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
};
