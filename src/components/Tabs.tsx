import React, {useContext, useEffect} from "react";
import {AppContext} from "../context/AppContextProvider";
import {useNavigate} from "react-router";
import {TYPOGRAPHY} from "../constsants/constants";

const Tabs: React.FC = () => {
    const { activeTab, setActiveTab } = useContext(AppContext);

    const  navigate = useNavigate();

    const handleHomeTab = () => {
        navigate("/home");
        setActiveTab("/home");
    };
    const handleTradeTab = () => {
        navigate("/trade");
        setActiveTab("/trade");
    };

    useEffect(() => {
        const path = window.location.pathname
        setActiveTab(path);
    },[]);


    return (
        <div className="Tabs">
            <ul className="nav">
                <li  className={activeTab === "/home" ? "active" : ""} onClick={handleHomeTab}>{TYPOGRAPHY.TAB_HOME}</li>
                <li  className={activeTab === "/trade" ? "active" : ""} onClick={handleTradeTab}>{TYPOGRAPHY.TAB_TRADE}</li>
            </ul>
        </div>
    );
}

export default Tabs;
