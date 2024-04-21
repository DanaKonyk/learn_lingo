import HomePage from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import TeachersPage from 'pages/TeachersPage/TeachersPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
      </Route>
    </Routes>
  );
};
