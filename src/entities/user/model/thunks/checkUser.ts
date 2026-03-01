import {createAsyncThunk} from "@reduxjs/toolkit";
import type {LoginPayload} from "../types.ts";
import {userApi} from "../../api/userApi.ts";

export const checkUser = createAsyncThunk<LoginPayload, void>("user/check",
    async (_, thunkAPI) => {
        try {
            const res = await userApi.check();
            return res.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    })