import React, {FC, useState} from 'react';

interface AppContextData {
    showLoginModal:  (flag: boolean) => void ;
    isLoginModalOpen: boolean;
}


interface Props {
    children?: React.ReactNode
}

export const defaultValues = {
    showLoginModal: () => {},
    isLoginModalOpen: false,
}

export const AppContext = React.createContext<AppContextData>({ ...defaultValues});


const AppContextProvider:FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultValues.isLoginModalOpen);

    const showModal = (flag: boolean) => { setIsOpen(flag) };

    return (
        <AppContext.Provider value={{
            showLoginModal: (flag: boolean) => showModal(flag),
            isLoginModalOpen: isOpen
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
