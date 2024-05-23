import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from "./store/reducers"


const store = configureStore({ reducer })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <Provider store={store}>
       <App />
     </Provider>
    </BrowserRouter>
);
