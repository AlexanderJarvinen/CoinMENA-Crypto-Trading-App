import React, {FC, useState} from 'react';

interface AppContextData {
    showLoginModal:  (flag: boolean) => void ;
    showRegisterModal:  (flag: boolean) => void ;
    showPassword:  () => void ;
    isLoginModalOpen: boolean;
    isRegisterModalOpen: boolean;
    isPasswordVisible: boolean;
}


interface Props {
    children?: React.ReactNode
}

export const defaultValues = {
    showLoginModal: () => {},
    showRegisterModal: () => {},
    showPassword: () => {},
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
    isPasswordVisible: false,
}

export const AppContext = React.createContext<AppContextData>({ ...defaultValues});


const AppContextProvider:FC<Props> = ({ children }) => {
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(defaultValues.isLoginModalOpen);
    const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(defaultValues.isRegisterModalOpen);
    const [isPaswordVisible, setIsPasswordVisible] = useState<boolean>(defaultValues.isPasswordVisible);

    const showLoginModal = (flag: boolean) => { setIsLoginOpen(flag) };
    const showRegisterModal = (flag: boolean) => { setIsRegisterOpen(flag) };
    const showPassword = () => { setIsPasswordVisible(!isPaswordVisible)};

    return (
        <AppContext.Provider value={{
            showLoginModal: (flag: boolean) => showLoginModal(flag),
            showRegisterModal: (flag: boolean) => showRegisterModal(flag),
            showPassword: () => showPassword(),
            isLoginModalOpen: isLoginOpen,
            isRegisterModalOpen: isRegisterOpen,
            isPasswordVisible: isPaswordVisible
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
