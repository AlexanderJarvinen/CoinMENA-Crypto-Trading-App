import React, {FC, useState} from 'react';

interface AppContextData {
    showLoginModal:  (flag: boolean) => void ;
    showRegisterModal:  (flag: boolean) => void ;
    showPassword:  () => void ;
    showDefaultPasswordView:  () => void ;
    setActiveTab:  (tab: string) => void ;
    isLoginModalOpen: boolean;
    isRegisterModalOpen: boolean;
    isPasswordVisible: boolean;
    activeTab: string;
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
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
    isPasswordVisible: false,
    activeTab: 'home'
}

export const AppContext = React.createContext<AppContextData>({ ...defaultValues});


const AppContextProvider:FC<Props> = ({ children }) => {
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(defaultValues.isLoginModalOpen);
    const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(defaultValues.isRegisterModalOpen);
    const [isPaswordVisible, setIsPasswordVisible] = useState<boolean>(defaultValues.isPasswordVisible);
    const [contextActiveTab, setContextActiveTab] = useState<string>(defaultValues.activeTab);

    const showLoginModal = (flag: boolean) => { setIsLoginOpen(flag) };
    const showRegisterModal = (flag: boolean) => { setIsRegisterOpen(flag) };
    const showPassword = () => { setIsPasswordVisible(!isPaswordVisible)};
    const showDefaultPasswordView = () => { setIsPasswordVisible(false)};
    const handleSetActiveTab = (tab: string) => { setContextActiveTab(tab)};

    return (
        <AppContext.Provider value={{
            showLoginModal: (flag: boolean) => showLoginModal(flag),
            showRegisterModal: (flag: boolean) => showRegisterModal(flag),
            showPassword: () => showPassword(),
            showDefaultPasswordView: () => showDefaultPasswordView(),
            setActiveTab:(tab: string) => handleSetActiveTab(tab),
            isLoginModalOpen: isLoginOpen,
            isRegisterModalOpen: isRegisterOpen,
            isPasswordVisible: isPaswordVisible,
            activeTab: contextActiveTab
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
