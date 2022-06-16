import React, {useContext, useEffect} from "react";
import {AppContext} from "../context/AppContextProvider";
import {useNavigate} from "react-router";

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
                <li  className={activeTab === "/home" ? "active" : ""} onClick={handleHomeTab}>Home</li>
                <li  className={activeTab === "/trade" ? "active" : ""} onClick={handleTradeTab}>Trade</li>
            </ul>
        </div>
    );
}

export default Tabs;
