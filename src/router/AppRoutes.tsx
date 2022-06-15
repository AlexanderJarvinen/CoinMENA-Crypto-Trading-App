import React from "react";

import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import NotAuthorisedPage from "../pages/NotAuthorisedPage";
import {Route, Routes} from "react-router-dom";

const AppRoutes: React.FC = () => {


    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<MainPage />} />
            <Route path="/not_authorised" element={<NotAuthorisedPage />} />
        </Routes>
    );
}

export default AppRoutes;
