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

const LoginBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

type Props = {
    title: string;
    loginBtn: string;
};


const Header = ({ title, loginBtn }:Props) => {

    const { showLoginModal } = useContext(AppContext);

    return (
        <header className='main_header'>
            <TitleWrapper>
                <h2>
                    {title}
                </h2>
            </TitleWrapper>
            <div></div>
            <LoginBtnWrapper>
                <ButtonOutlined
                    btnTitle={loginBtn}
                    icon={LoginArrow}
                    onClick={() => showLoginModal(true)}
                />
            </LoginBtnWrapper>


        </header>
    );
}

export default Header;
