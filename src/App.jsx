import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login'
import Home from './component/Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} /> // Route untuk halaman login
        <Route path='/home' element={<Home />} /> // Route untuk halaman home
      </Routes>
    </BrowserRouter>
  );
}

export default App;
