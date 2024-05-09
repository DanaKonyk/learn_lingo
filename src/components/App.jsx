import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import Loader from '../components/Loader/Loader';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const Teachers = lazy(() => import('../pages/TeachersPage/TeachersPage'));
const Favorites = lazy(() => import('../pages/FavoritePage/FavoritePage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route
          path="/favorites"
          element={<PrivateRoute component={<Favorites />} />}
        />
      </Route>
    </Routes>
  );
};
