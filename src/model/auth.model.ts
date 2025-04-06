export interface LoginCredentials {
    username: string,
    password: string,
}

export interface RegisterCredentials {
    email: string,
    password: string
}

export interface TokenResponse {
    token: string;
}
