import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Pesanan from './component/Pesanan';
import Register from './pages/register';
import SideBar from './component/Sidebar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/pesanan' element={<Pesanan />} />
      <Route path='/register' element={<Register />} />
      <Route path='/sidebar' element={<SideBar/>}/>
    </Routes>
  );
}

export default App;
