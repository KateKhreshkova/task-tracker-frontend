export interface User {
    email: string
}

export interface UserState{
    user: User | null,
    isAuth: boolean,
    isChecking: boolean
}

export interface LoginPayload{
    email: string,
    password: string
}