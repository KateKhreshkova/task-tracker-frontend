import type {UserState} from "./types.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: UserState = {user: null, isAuth: true, isChecking: false};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(checkUser.fulfilled, (state, action) => {
    //             state.user = {login: action.payload.login};
    //             state.isChecking = false;
    //             state.isAuth = true;
    //         })
    //         .addCase(checkUser.rejected, (state) => {
    //             state.isChecking = false;
    //             state.user = null;
    //             state.isAuth = false;
    //         })
    //         .addCase(loginUser.fulfilled, (state) => {
    //             state.isAuth = true;
    //         })
    //         .addCase(logoutUser.fulfilled, (state) => {
    //             state.user = null;
    //             state.isAuth = false;
    //         })
    // },
});