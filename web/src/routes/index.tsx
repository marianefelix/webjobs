import { Home } from 'pages/Home';
import { JobList } from 'pages/JobList';
import { Login } from 'pages/Login';
import { NewJob } from 'pages/NewJob';
import { UserRegistration } from 'pages/UserRegistration';

interface RoutesType {
  path: string;
  isPrivate?: boolean;
  element: JSX.Element;
}

export const routes: RoutesType[] = [
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
  { path: 'new-job', isPrivate: true, element: <NewJob /> },
  {
    path: 'user-registration',
    element: <UserRegistration />,
  },
];
