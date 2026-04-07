import type { ApiError } from "../../../shared/lib/errors/normalizeApiError";

export interface User {
    email: string
}

export interface UserState{
    user: User | null,
    isAuth: boolean,
    isChecking: boolean,
    isLoading: boolean,
    error: ApiError | null
}

export interface LoginPayload{
    email: string,
    password: string
}

export interface CheckPayload{
    email: string
}
