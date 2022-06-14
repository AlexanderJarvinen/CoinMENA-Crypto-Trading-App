import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainLayout from './MainLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>
);
