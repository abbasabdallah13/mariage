import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExitPage from './pages/exitPage';
import Home from './pages/Home';
import LoginPage from './pages/loginPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/exit' element={<ExitPage />} />
    </Routes>
  );
};

export default App;
