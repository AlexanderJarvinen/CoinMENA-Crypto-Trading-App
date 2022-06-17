
import React, {useContext, useEffect, useState} from "react";
import { AppContext } from "../context/AppContextProvider"
import Input from "./Input";
import {Icon} from "./Icon";
import {EyeNotVisible, EyeVisible} from "../assets/icons";
import {ICON_SIZES} from "../constsants/constants";
import { useAuth } from "../lib/auth";
import { useNavigate } from "react-router-dom";

type Props = {
    title: string;
};

export const LoginModal = ({ title }:Props) => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [resp, setResponse] = useState<object | null>(null);
    const [error, setError] = useState<any | null>(null);

    const { isLoginModalOpen, showLoginModal, isPasswordVisible, showPassword, showDefaultPasswordView, setActiveTab } = useContext(AppContext);

    const { login } = useAuth();
    const navigate = useNavigate();


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmitRegistration = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const resp  = await login({
                email: email,
                password: password,
            });
            setResponse(resp);



        } catch (err) {
            setError(err);
        }
    }

    const handleRequiredCloseCleaning = () => {
        setEmail("");
        setPassword("");
        setResponse(null);
        setError(null);
        showDefaultPasswordView();
        showLoginModal(false);
    }

    useEffect(() => {
        if(resp) {
            setTimeout(() => {
                handleRequiredCloseCleaning();
                navigate('/home');
                setActiveTab('/home');
            }, 100);
        }

    }, [resp]);


    if (isLoginModalOpen) {
        return (
            <>
                <div
                    className="modalContainer"
                >
                    <div className="modal" >
                        {error?
                                <header className="modal_header_error_wrapper">
                                    <h2 className="modal_header-error"> {error.message} </h2>
                                </header>
                                :
                                <header className="modal_header">
                                    <h2 className="modal_header-title"> {title} </h2>
                                </header>
                        }
                        <main className="modal_content">
                            <Input
                                title={"E-mail"}
                                type={"e-mail"}
                                name={"register_e-mail"}
                                value={email}
                                onChange={(e) => handleEmailChange(e)}
                            />
                            <Input
                                title={"Password"}
                                type={isPasswordVisible? "text" : "password"}
                                name={"register_password"}
                                icon={<Icon icon={isPasswordVisible? EyeVisible : EyeNotVisible} iconSize={ICON_SIZES.INPUT_SIZE}/>}
                                onClick={showPassword}
                                value={password}
                                onChange={(e) => handlePasswordChange(e)}
                            />
                        </main>
                        <footer className="modal_footer">
                            <button className="modal-close"  onClick={() => {
                                handleRequiredCloseCleaning();
                                showLoginModal(false)
                            }}>
                                Cancel
                            </button>

                            <button className="submit" onClick={(e) => handleSubmitRegistration(e)}>Submit</button>
                        </footer>
                    </div>
                </div>
            </>
        );
    }

    return null;

}
