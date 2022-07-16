import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';

export const PrivateRoute = () => {
  const { userId } = useContext(AuthContext);

  if (!userId) {
    return <Navigate to={'/login'} replace />;
  }

  return <Outlet />;
};
