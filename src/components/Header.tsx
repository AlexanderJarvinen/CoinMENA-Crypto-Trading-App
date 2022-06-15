import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import ButtonOutlined from './ButtonOutluned';
import { LoginArrow } from '../assets/icons';
import {AppContext} from "../context/AppContextProvider";
import { useAuth } from "../lib/auth";
import { storage } from "../utils";

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HeaderBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;

const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const BtnGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

type Props = {
    title: string;
    loginBtnTitle: string;
    registerBtnTitle: string;
    logoutBtnTitle: string;
};


const Header = ({ title, loginBtnTitle,  registerBtnTitle, logoutBtnTitle}:Props) => {

    const { showLoginModal, showRegisterModal } = useContext(AppContext);

    const { user, logout } = useAuth();

    const token = storage.getToken();

    const handleLogout = () => {
        window.location.href = "/"
        logout();
    }

    useEffect(() => {
        console.log(token);
    }, [token])

    return (
        <header className='main_header'>
            <TitleWrapper>
                <h2>
                    {title}
                </h2>
            </TitleWrapper>
            <div></div>
            {!token?
                <BtnGroupWrapper>
                    <HeaderBtnWrapper>
                        <ButtonOutlined
                            btnTitle={loginBtnTitle}
                            icon={LoginArrow}
                            onClick={() => showLoginModal(true)}
                        />
                    </HeaderBtnWrapper>
                    <HeaderBtnWrapper>
                        <ButtonOutlined
                            btnTitle={registerBtnTitle}
                            onClick={() => showRegisterModal(true)}
                        />
                    </HeaderBtnWrapper>
                </BtnGroupWrapper>
                :
                <BtnGroupWrapper>
                    <UserInfoWrapper>
                        <h3>Hello, {user?.name}</h3>
                    </UserInfoWrapper>
                    <HeaderBtnWrapper>
                        <ButtonOutlined
                            btnTitle={logoutBtnTitle}
                            onClick={handleLogout}
                        />
                    </HeaderBtnWrapper>
                </BtnGroupWrapper>
            }

        </header>
    );
}

export default Header;
