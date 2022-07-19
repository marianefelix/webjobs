import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';

interface PrivateRouteProps {
  element: JSX.Element;
}

export const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const { userId } = useContext(AuthContext);

  if (!userId) {
    return <Navigate to={'/login'} replace />;
  }

  return element;
};
