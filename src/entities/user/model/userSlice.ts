import { checkUser } from "./thunks/checkUser.ts";
import type {UserState} from "./types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {loginUser} from "./thunks/loginUser.ts";
import {logoutUser} from "./thunks/logoutUser.ts";

const initialState: UserState = {user: null, isAuth: true, isChecking: false};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(checkUser.fulfilled, (state, action) => {
                state.user = {email: action.payload.email};
                state.isChecking = false;
                state.isAuth = true;
            })
            .addCase(checkUser.rejected, (state) => {
                state.isChecking = false;
                state.user = null;
                state.isAuth = false;
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.isAuth = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuth = false;
            })
    },
});