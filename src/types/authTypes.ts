export type AuthResponse = {
    user: User;
    jwt: string;
}

export type User = {
    id: string;
    email: string;
    name?: string;
}

export type AuthError = {
    message: string;
}
