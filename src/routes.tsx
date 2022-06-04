import { Home } from 'pages/Home';
import { JobList } from 'pages/JobList';
import { Login } from 'pages/Login';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'list',
    element: <JobList />,
  },
  {
    path: 'login',
    element: <Login />,
  },
];
