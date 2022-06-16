import { initReactQueryAuth } from "react-query-auth";
import {
    getUserProfile,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
} from "../api";

import { AuthResponse, User }  from '../types/authTypes';

import { storage } from "../utils";

export const handleUserResponse = async(data: AuthResponse) => {
    const { jwt, user } = data;
    storage.setToken(jwt);
    return user;
}

const loadUser = async() => {
    let user = null;

    if (storage.getToken()) {
        const data = await getUserProfile();
        user = data;
    }
    return user;
}

const loginFn = async(data: AuthResponse ) => {
    const response = await loginWithEmailAndPassword(data);
    const user = await handleUserResponse(response);
    return user;
}
const registerFn = async (data: AuthResponse ) => {
    const response = await registerWithEmailAndPassword(data);
    const user = await handleUserResponse(response);
    return user;
}

const logoutFn = async() => {
    await storage.clearToken();
}

const authConfig = {
    loadUser,
    loginFn,
    registerFn,
    logoutFn
};

const { AuthProvider, useAuth } = initReactQueryAuth<User>(authConfig);

export { AuthProvider, useAuth };
