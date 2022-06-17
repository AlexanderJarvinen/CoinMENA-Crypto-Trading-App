import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.scss';
import MainLayout from './MainLayout';
import { initMock } from "./mock";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

initMock.then(() => {
    root.render(
        <React.StrictMode>
            <MainLayout />
        </React.StrictMode>
    );

});
