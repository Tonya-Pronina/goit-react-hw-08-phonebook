import { UseAuth } from '../Hooks/UseAuth';
import { Navigate } from 'react-router-dom';


export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = UseAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};