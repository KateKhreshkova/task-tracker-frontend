import {createAsyncThunk} from "@reduxjs/toolkit";
import {userApi} from "../../api/userApi.ts";

export const logoutUser = createAsyncThunk<void, void>("user/logout",
    async (_, thunkAPI) => {
        try {
            await userApi.logout();
            localStorage.removeItem("accessToken");
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    })