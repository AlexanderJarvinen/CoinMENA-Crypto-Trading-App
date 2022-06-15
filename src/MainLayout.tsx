import React, {useEffect} from 'react';
import './assets/css/MainLayout.css';
import Header from './components/Header';
import { LoginModal } from './components/LoginModal';
import { RegistrationModal } from './components/RegistrationrModal';
import { Constants } from './constsants/constants';
import  AppContextProvider from './context/AppContextProvider';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import  AppRoutes  from "./router/AppRoutes";

const MainLayout: React.FC = () => {

  const history = createBrowserHistory({ window });

  return (
    <div>
        <AppContextProvider>
            <Header
                title={Constants.TITLE}
                loginBtnTitle={Constants.LOG_IN_BTN}
                registerBtnTitle={Constants.REGISTER_BTN}
            />
            <HistoryRouter history={history}>
                <AppRoutes />
            </HistoryRouter>,
            <LoginModal title={Constants.LOGIN_MODAL_TITLE}/>
            <RegistrationModal title={Constants.REGISTER_MODAL_TITLE} />
        </AppContextProvider>

    </div>
  );
}

export default MainLayout;
