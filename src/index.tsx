import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import './assets/css/Modal.scss'
import './assets/css/Tabs.css'
import './assets/css/Table.scss'
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
