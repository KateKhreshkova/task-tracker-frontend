import {createAsyncThunk} from "@reduxjs/toolkit";
import {userApi} from "../../api/userApi.ts";
import { normalizeApiError } from "../../../../shared/lib/errors/normalizeApiError";

export const logoutUser = createAsyncThunk<
    void,
    void,
    { rejectValue: ReturnType<typeof normalizeApiError> }
>("user/logout",
    async (_, thunkAPI) => {
        try {
            await userApi.logout();
            localStorage.removeItem("accessToken");
        } catch (err) {
            return thunkAPI.rejectWithValue(normalizeApiError(err));
        }
    })
