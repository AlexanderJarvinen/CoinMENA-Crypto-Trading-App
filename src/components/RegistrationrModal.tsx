
import React, { useContext }  from "react";
import "../assets/css/Modal.scss";
import { AppContext } from "../context/AppContextProvider"
import Input from "./Input";
import { EyeNotVisible, EyeVisible } from "../assets/icons";
import { Icon } from "../components/Icon"
import { ICON_SIZES } from "../constsants/constants"

type Props = {
    title: string;
};

export const RegistrationModal = ({ title }:Props) => {

    const { isRegisterModalOpen, showRegisterModal, isPasswordVisible, showPassword } = useContext(AppContext);

    if (isRegisterModalOpen) {
        return (
            <>
                <div
                    className="modalContainer"
                >
                    <div className="modal" >
                        <header className="modal_header">
                            <h2 className="modal_header-title"> {title} </h2>
                        </header>
                        <main className="modal_content">
                            <Input
                                title={"E-mail"}
                                type={"e-mail"}
                                name={"register_e-mail"}
                            />
                            <Input
                                title={"Name"}
                                type={"text"}
                                name={"register_name"}
                            />
                            <Input
                                title={"Password"}
                                type={isPasswordVisible? "text" : "password"}
                                name={"register_password"}
                                icon={<Icon icon={isPasswordVisible? EyeVisible : EyeNotVisible} iconSize={ICON_SIZES.INPUT_SIZE}/>}
                                onClick={showPassword}
                            />
                        </main>
                        <footer className="modal_footer">
                            <button className="modal-close"  onClick={() => showRegisterModal(false)}>
                                Cancel
                            </button>

                            <button className="submit">Submit</button>
                        </footer>
                    </div>
                </div>
            </>
        );
    }

    return null;

}
