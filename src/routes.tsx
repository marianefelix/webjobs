import { JobList } from 'pages/JobList';

export const routes = [
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: 'list',
    element: <JobList />,
  },
];
