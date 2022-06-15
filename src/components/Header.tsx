import React, {useContext} from "react";
import styled from "styled-components";
import ButtonOutlined from './ButtonOutluned';
import { LoginArrow } from '../assets/icons';
import {AppContext} from "../context/AppContextProvider";


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

const BtnGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

type Props = {
    title: string;
    loginBtnTitle: string;
    registerBtnTitle: string;
};


const Header = ({ title, loginBtnTitle,  registerBtnTitle}:Props) => {

    const { showLoginModal, showRegisterModal } = useContext(AppContext);

    return (
        <header className='main_header'>
            <TitleWrapper>
                <h2>
                    {title}
                </h2>
            </TitleWrapper>
            <div></div>
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
        </header>
    );
}

export default Header;
