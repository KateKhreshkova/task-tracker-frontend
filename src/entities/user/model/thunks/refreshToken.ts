import { createAsyncThunk } from "@reduxjs/toolkit";
import {userApi} from "../../api/userApi.ts";

export const refresh = createAsyncThunk<string, void>("user/refresh",
    async (_, thunkAPI) => {
        try {
            const res = await userApi.refresh();
            return res.data;
        } catch (err) {
            thunkAPI.rejectWithValue(err);
        }
    })