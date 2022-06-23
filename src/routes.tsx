import { Home } from 'pages/Home';
import { JobList } from 'pages/JobList';
import { Login } from 'pages/Login';
import { UserRegistration } from 'pages/UserRegistration';

interface RoutesType {
  path: string;
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
  {
    path: 'user-registration',
    element: <UserRegistration />,
  },
];
