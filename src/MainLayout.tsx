import React from 'react';
import './assets/css/mainLayout.scss';
import Header from './components/Header';
import { LoginModal } from './components/LoginModal';
import { RegistrationModal } from './components/RegistrationrModal';
import { TYPOGRAPHY } from './constsants/constants';
import  AppContextProvider from './context/AppContextProvider';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import  AppRoutes  from "./router/AppRoutes";
import { AuthProvider } from "./lib/auth";
import { ReactQueryProvider } from "./lib/react-quiery";
import {CoinIconProvider} from "coin-icon";

const MainLayout: React.FC = () => {

  const history = createBrowserHistory({ window });

  return (
    <div>
        <ReactQueryProvider>
            <AuthProvider>
                <AppContextProvider>
                    <CoinIconProvider folderPath="images/svg">
                        <HistoryRouter history={history}>
                            <Header
                                title={TYPOGRAPHY.TITLE}
                                loginBtnTitle={TYPOGRAPHY.LOG_IN_BTN}
                                registerBtnTitle={TYPOGRAPHY.REGISTER_BTN}
                                logoutBtnTitle={TYPOGRAPHY.LOG_OUT_BTN}
                            />
                            <AppRoutes />
                            <LoginModal title={TYPOGRAPHY.LOGIN_MODAL_TITLE}/>
                            <RegistrationModal
                                title={TYPOGRAPHY.REGISTER_MODAL_TITLE}
                                successMessage={TYPOGRAPHY.REGISTER_MODAL_SUCCESS}
                            />
                        </HistoryRouter>
                    </CoinIconProvider>
                </AppContextProvider>
            </AuthProvider>
        </ReactQueryProvider>
    </div>
  );
}

export default MainLayout;
