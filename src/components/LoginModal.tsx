
//import {Close} from "../assets/icons";
import React, { useContext }  from "react";
import "../assets/css/Modal.scss";
//import { Icon } from "../components/Icon"
import { AppContext } from "../context/AppContextProvider"

type Props = {
    title: string;
};

export const LoginModal = ({ title }:Props) => {

    const { isLoginModalOpen, showLoginModal } = useContext(AppContext);

    if (isLoginModalOpen) {
        return (
            <>
                <div
                    className="modalContainer"
                >
                    <div className="modal" >
                        <header className="modal_header">
                            <h2 className="modal_header-title"> {title} </h2>
                            {/*Need to implement props*/}
                            {/*<button className="close" onClick={() => showLoginModal(false)} >*/}
                            {/*    <Icon icon={Close} />*/}
                            {/*</button>*/}
                        </header>
                        <main className="modal_content">
                            This is Modal Content
                        </main>
                        <footer className="modal_footer">
                            <button className="modal-close"  onClick={() => showLoginModal(false)}>
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
