import { Home } from 'pages/Home';
import { JobList } from 'pages/JobList';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'list',
    element: <JobList />,
  },
];
