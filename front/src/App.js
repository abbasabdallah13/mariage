import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExitPage from './pages/exitPage';
import Questions from './pages/questionsPage';
import LoginPage from './pages/loginPage';
import LoginDashboardPage from './pages/loginDashboardPage';
import DashboardPage from './pages/dashboardPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<Questions />} />
      <Route path='/exit' element={<ExitPage />} />
      <Route path='/loginDashboard' element={<LoginDashboardPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
    </Routes>
  );
};

export default App;
