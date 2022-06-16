import React from "react";

import RootPage from "../pages/RootPage";
import HomePage from "../pages/HomePage";
import TradePage from "../pages/TradePage";
import {Route, Routes} from "react-router-dom";

const AppRoutes: React.FC = () => {


    return (
        <Routes>
            <Route path="/" element={<RootPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/trade" element={<TradePage />} />
        </Routes>
    );
}

export default AppRoutes;
