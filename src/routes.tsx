import { Home } from 'pages/Home';
import { JobList } from 'pages/JobList';
import { Login } from 'pages/Login';
import { NewJob } from 'pages/NewJob';

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
  { path: 'new-job', element: <NewJob /> },
];
