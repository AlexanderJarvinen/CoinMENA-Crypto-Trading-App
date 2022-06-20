import { storage } from "./utils";
import { AppQueryOptions} from 'react-query-typed-api';

import { AuthResponse }from './types/authTypes';


const API_URL = "https://my-server/api";

export const handleApiResponse = async(response: AppQueryOptions) => {
    const data = await response.json();

    if (response.ok) {
        return data;
    } else {
        return Promise.reject(data);
    }
}

export const getUserProfile = async() => {
    return fetch(`${API_URL}/auth/me`, {
        headers: {
            Authorization: storage.getToken()
        }
    }).then(handleApiResponse);
}

export const loginWithEmailAndPassword = (data: AppQueryOptions): Promise<AuthResponse> => {
    return window
        .fetch(`${API_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(handleApiResponse);
}

export const registerWithEmailAndPassword = (
    data: AppQueryOptions
): Promise<AuthResponse> => {
    return window
        .fetch(`${API_URL}/auth/register`, {
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(handleApiResponse);
}
