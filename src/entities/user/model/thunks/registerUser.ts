import { createAsyncThunk } from "@reduxjs/toolkit";
import type {LoginPayload} from "../types.ts";
import {userApi} from "../../api/userApi.ts";

export const registerUser = createAsyncThunk("user/register",
    async (payload: LoginPayload, thunkAPI) => {
        try {
            await userApi.register(payload);
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    })