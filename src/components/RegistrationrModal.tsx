
import React, {useContext, useEffect, useState} from "react";
import "../assets/css/Modal.scss";
import { AppContext } from "../context/AppContextProvider"
import Input from "./Input";
import { EyeNotVisible, EyeVisible } from "../assets/icons";
import { Icon } from "../components/Icon"
import { ICON_SIZES } from "../constsants/constants";
import { useAuth } from "../lib/auth";
import {useNavigate} from "react-router-dom";

type Props = {
    title: string;
    successMessage: string;
};

export const RegistrationModal = ({ title, successMessage }:Props) => {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<any | null>(null);
    const [resp, setResponse] = useState<object | null>(null);
    const [showSuccess, setShowSuccess] = useState<boolean>(false)
    const { isRegisterModalOpen, showRegisterModal, isPasswordVisible, showPassword, showDefaultPasswordView } = useContext(AppContext);

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmitRegistration = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
         const resp  = await register({
                email: email,
                name: name,
                password: password,
            });
            setResponse(resp);

        } catch (err) {
            setError(err);
        }
    }

    const handleRequiredCloseCleaning = () => {
        setEmail("");
        setName("");
        setPassword("");
        setShowSuccess(false);
        setResponse(null);
        setError(null);
        showDefaultPasswordView();
        showRegisterModal(false);
    }

    useEffect(() => {
        if(resp) {
            setShowSuccess(true);
            setTimeout(() => {
                handleRequiredCloseCleaning();
                navigate('/home');
            }, 1000);
        }

    }, [resp]);

    if (isRegisterModalOpen) {
        return (
            <>
                <div
                    className="modalContainer"
                >
                    <div className="modal" >
                        {showSuccess?
                            <header className="modal_header_success_wrapper">
                                <h2 className="modal_header-success"> {successMessage} </h2>
                            </header>
                            :
                            error?
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
                                title={"Name"}
                                type={"text"}
                                name={"register_name"}
                                value={name}
                                onChange={(e) => handleNameChange(e)}
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
                                showRegisterModal(false)
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
