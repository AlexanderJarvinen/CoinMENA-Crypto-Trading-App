import React from 'react';
import './assets/css/MainLayout.css';
import Header from './components/Header';
import { Modal } from './components/Modal';
import { TYPOGRAPHY } from './constsants/typography';
import  AppContextProvider from './context/AppContextProvider';

const MainLayout: React.FC = () => {
  return (
    <div>
        <AppContextProvider>
            <Header title={TYPOGRAPHY.TITLE} loginBtn={TYPOGRAPHY.LOG_IN_BTN} />
            <Modal title={TYPOGRAPHY.MODAL_TITLE}/>
        </AppContextProvider>

    </div>
  );
}

export default MainLayout;
