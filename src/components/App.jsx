import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const Teachers = lazy(() => import('../pages/TeachersPage/TeachersPage'));
const Favorites = lazy(() => import('../pages/FavoritePage/FavoritePage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
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
