import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../context/AppContextProvider";

const Tabs: React.FC = () => {
    const { activeTab, setActiveTab } = useContext(AppContext);

    const handleTab1 = () => {
        window.location.href = "/home"
    };
    const handleTab2 = () => {
        window.location.href = "/trade"
    };

    useEffect(() => {
        const path = window.location.pathname
        setActiveTab(path);
    },[]);


    return (
        <div className="Tabs">
            <ul className="nav">
                <li  className={activeTab === "/home" ? "active" : ""} onClick={handleTab1}>Home</li>
                <li  className={activeTab === "/trade" ? "active" : ""} onClick={handleTab2}>Trade</li>
            </ul>
        </div>
    );
}

export default Tabs;
