import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}



