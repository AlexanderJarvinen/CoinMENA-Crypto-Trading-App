import React, { useContext } from "react";
import styled from "styled-components";
import ButtonOutlined from './ButtonOutluned';
import Tabs from './Tabs';
import { LoginArrow } from '../assets/icons';
import {AppContext} from "../context/AppContextProvider";
import { useAuth } from "../lib/auth";
import { storage } from "../utils";

const SectionHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 33%;
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
    justify-content: flex-end;
    width: 100%;
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


    return (
        <header className='main_header'>
            <SectionHeaderWrapper>
                <h2>
                    {title}
                </h2>
            </SectionHeaderWrapper>
            <SectionHeaderWrapper>
                {
                    token?
                        <Tabs />
                        : null
                }
            </SectionHeaderWrapper>
            <SectionHeaderWrapper>
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
            </SectionHeaderWrapper>
        </header>
    );
}

export default Header;
