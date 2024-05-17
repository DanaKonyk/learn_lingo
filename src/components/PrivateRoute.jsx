import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const [authChecked, setAuthChecked] = useState(false);
  useEffect(() => {
    if (!isRefreshing) {
      setAuthChecked(true);
    }
  }, [isRefreshing]);

  const shouldRedirect = !isLoggedIn && authChecked;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
