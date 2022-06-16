export interface AuthResponse {
    user: User;
    jwt: string;
}

export interface User {
    id: string;
    email: string;
    name?: string;
}

