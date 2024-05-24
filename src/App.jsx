import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './component/Home';
import Register from './pages/register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
