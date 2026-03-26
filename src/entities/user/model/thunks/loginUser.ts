import { createAsyncThunk } from "@reduxjs/toolkit";
import type { LoginPayload } from "../types";
import { userApi } from "../../api/userApi";

export const loginUser = createAsyncThunk<string, LoginPayload>("user/login",
    async (payload, thunkAPI) => {
        try {
            const res = await userApi.login(payload);
            const {accessToken} = res.data
            localStorage.setItem("accessToken", accessToken);
            console.log(accessToken);
            return accessToken;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    })