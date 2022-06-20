import React, {FC, useState} from 'react';
import {CurrencyType} from "../types/componentsTypes";

interface AppContextData {
    showLoginModal:  (flag: boolean) => void ;
    showRegisterModal:  (flag: boolean) => void ;
    showPassword:  () => void ;
    showDefaultPasswordView:  () => void ;
    setActiveTab:  (tab: string) => void ;
    chooseCurrency: (currency: CurrencyType) => void;
    isLoginModalOpen: boolean;
    isRegisterModalOpen: boolean;
    isPasswordVisible: boolean;
    activeTab: string;
    currency: CurrencyType | null;
}


interface Props {
    children?: React.ReactNode
}

export const defaultValues = {
    showLoginModal: () => {},
    showRegisterModal: () => {},
    showPassword: () => {},
    showDefaultPasswordView:  () => {},
    setActiveTab:  () => {},
    chooseCurrency: () => {},
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
    isPasswordVisible: false,
    activeTab: 'home',
    currency: null
}

export const AppContext = React.createContext<AppContextData>({ ...defaultValues});


const AppContextProvider:FC<Props> = ({ children }) => {
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(defaultValues.isLoginModalOpen);
    const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(defaultValues.isRegisterModalOpen);
    const [isPaswordVisible, setIsPasswordVisible] = useState<boolean>(defaultValues.isPasswordVisible);
    const [contextActiveTab, setContextActiveTab] = useState<string>(defaultValues.activeTab);
    const [contextCurrency, setContextCurrency] = useState<any | null>(defaultValues.currency);

    const showLoginModal = (flag: boolean) => { setIsLoginOpen(flag) };
    const showRegisterModal = (flag: boolean) => { setIsRegisterOpen(flag) };
    const showPassword = () => { setIsPasswordVisible(!isPaswordVisible)};
    const showDefaultPasswordView = () => { setIsPasswordVisible(false)};
    const handleSetActiveTab = (tab: string) => { setContextActiveTab(tab)};
    const handleSetCurrency = (currency: CurrencyType) => { console.log(currency); setContextCurrency(currency)};

    return (
        <AppContext.Provider value={{
            showLoginModal: (flag: boolean) => showLoginModal(flag),
            showRegisterModal: (flag: boolean) => showRegisterModal(flag),
            showPassword: () => showPassword(),
            showDefaultPasswordView: () => showDefaultPasswordView(),
            setActiveTab:(tab: string) => handleSetActiveTab(tab),
            chooseCurrency: (currency: CurrencyType) => handleSetCurrency(currency),
            isLoginModalOpen: isLoginOpen,
            isRegisterModalOpen: isRegisterOpen,
            isPasswordVisible: isPaswordVisible,
            activeTab: contextActiveTab,
            currency: contextCurrency,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
