import HomePage from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import TeachersPage from 'pages/TeachersPage/TeachersPage';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import FavoritePage from 'pages/FavoritePage/FavoritePage';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing page...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route
          path="/favorites"
          element={<PrivateRoute component={<FavoritePage />} />}
        />
      </Route>
    </Routes>
  );
};
