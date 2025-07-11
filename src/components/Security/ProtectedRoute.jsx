import { Navigate, useLocation } from 'react-router-dom';
import {useAuth} from './AuthContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated
    ? children
    : <Navigate to="/login" state={{ from: location }} replace />
};

export default ProtectedRoute;

