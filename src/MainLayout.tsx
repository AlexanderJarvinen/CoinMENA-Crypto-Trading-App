import React from 'react';
import './assets/css/MainLayout.css';
import Header from './components/Header';
import { Modal } from './components/Modal';
import { TYPOGRAPHY } from './constsants/typography';
import  AppContextProvider from './context/AppContextProvider';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import  AppRoutes  from "./router/AppRoutes";

const MainLayout: React.FC = () => {

  const history = createBrowserHistory({ window });

  return (
    <div>
        <AppContextProvider>
            <Header title={TYPOGRAPHY.TITLE} loginBtn={TYPOGRAPHY.LOG_IN_BTN} />
            <HistoryRouter history={history}>
                <AppRoutes />
            </HistoryRouter>,
            <Modal title={TYPOGRAPHY.MODAL_TITLE}/>
        </AppContextProvider>

    </div>
  );
}

export default MainLayout;
