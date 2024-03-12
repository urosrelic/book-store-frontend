import { Outlet, Navigate } from 'react-router-dom';
export const PrivateRoutes = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};
