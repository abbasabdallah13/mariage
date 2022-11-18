import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExitPage from './pages/exitPage';
import Questions from './pages/questionsPage';
import LoginPage from './pages/loginPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<Questions />} />
      <Route path='/exit' element={<ExitPage />} />
    </Routes>
  );
};

export default App;
