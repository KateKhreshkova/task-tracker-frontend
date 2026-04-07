import { checkUser } from "./thunks/checkUser.ts";
import type {UserState} from "./types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {loginUser} from "./thunks/loginUser.ts";
import {logoutUser} from "./thunks/logoutUser.ts";
import {registerUser} from "./thunks/registerUser.ts";

const initialState: UserState = {
    user: null,
    isAuth: true,
    isChecking: false,
    isLoading: false,
    error: null,
};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(checkUser.pending, (state) => {
                state.isChecking = true;
                state.error = null;
            })
            .addCase(checkUser.fulfilled, (state, action) => {
                state.user = {email: action.payload.email};
                state.isChecking = false;
                state.isAuth = true;
            })
            .addCase(checkUser.rejected, (state, action) => {
                state.isChecking = false;
                state.user = null;
                state.isAuth = false;
                state.error = action.payload ?? { message: "Failed to check user." };
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isAuth = true;
                state.user = { email: action.payload.email };
                state.isLoading = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? { message: "Login failed." };
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? { message: "Registration failed." };
            })
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuth = false;
                state.isLoading = false;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? { message: "Logout failed." };
            })
    },
});
